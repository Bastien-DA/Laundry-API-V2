import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { AbstractService } from '@shared/application/services/abstract.service';
import { MachineRepository } from '@features/machine/domain/ports/machine.repository.port';
import { MachineMapper } from '@features/machine/application/mappers/machine.mapper';
import { MachineEntity } from '@features/machine/domain/entities/machine.entity';
import { MachineDto } from '@features/machine/interface/http/dtos/machine.dto';
import { CreateMachineDto } from '@features/machine/interface/http/dtos/create-machine.dto';
import { EditMachineDto } from '@features/machine/interface/http/dtos/edit-machine.dto';
import { MachineFilterDto } from '@features/machine/interface/http/dtos/machine-filter.dto';
import { PrismaService } from '@core/database/prisma.service';
import { MachineStatusEnum } from '@prisma/client';

@Injectable()
export class MachineService extends AbstractService<
    MachineEntity,
    string,
    MachineDto,
    CreateMachineDto,
    EditMachineDto,
    MachineFilterDto
> {
    constructor(
        @Inject('MachineRepository') repo: MachineRepository,
        mapper: MachineMapper,
        private readonly prisma: PrismaService,
    ) {
        super(repo as any, mapper);
    }

    // ===============================
    // 🔥 STATE MACHINE METHODS
    // ===============================

    async startProgram(machineId: string, programId: string): Promise<void> {
        await this.prisma.$transaction(async (tx) => {
            const machine = await tx.machine.findUnique({
                where: { id: machineId },
                include: { machineStatus: true, programs: true },
            });

            if (!machine) throw new BadRequestException('Machine not found');

            const allowed = machine.programs.some(p => p.id === programId);
            if (!allowed) throw new BadRequestException('Program not allowed for this machine');

            const current = machine.machineStatus?.status;

            if (current === MachineStatusEnum.OUT_OF_ORDER)
                throw new BadRequestException('Machine is out of order');

            if (current === MachineStatusEnum.RUNNING)
                throw new BadRequestException('Machine already running');

            if (!machine.machineStatus) {
                await tx.machineStatus.create({
                    data: {
                        machine: { connect: { id: machineId } },
                        status: MachineStatusEnum.RUNNING,
                        currentProgram: { connect: { id: programId } },
                    },
                });
            } else {
                await tx.machineStatus.update({
                    where: { machineId },
                    data: {
                        status: MachineStatusEnum.RUNNING,
                        currentProgram: { connect: { id: programId } },
                    },
                });
            }
        });
    }

    async pauseProgram(machineId: string): Promise<void> {
        await this.updateStatus(machineId, MachineStatusEnum.RUNNING, MachineStatusEnum.PAUSED);
    }

    async resumeProgram(machineId: string): Promise<void> {
        await this.updateStatus(machineId, MachineStatusEnum.PAUSED, MachineStatusEnum.RUNNING);
    }

    async stopProgram(machineId: string): Promise<void> {
        await this.prisma.machineStatus.update({
            where: { machineId },
            data: {
                status: MachineStatusEnum.AVAILABLE,
                currentProgram: { disconnect: true },
            },
        });
    }

    async setOutOfOrder(machineId: string): Promise<void> {
        await this.forceStatus(machineId, MachineStatusEnum.OUT_OF_ORDER);
    }

    async markAvailable(machineId: string): Promise<void> {
        await this.updateStatus(machineId, MachineStatusEnum.OUT_OF_ORDER, MachineStatusEnum.AVAILABLE);
    }

    // ===============================
    // 🔒 PRIVATE HELPERS
    // ===============================

    private async updateStatus(
        machineId: string,
        expected: MachineStatusEnum,
        next: MachineStatusEnum,
    ) {
        const status = await this.prisma.machineStatus.findUnique({
            where: { machineId },
        });

        if (!status) throw new BadRequestException('Machine has no status');

        if (status.status !== expected)
            throw new BadRequestException(`Invalid state transition (${status.status} → ${next})`);

        await this.prisma.machineStatus.update({
            where: { machineId },
            data: { status: next },
        });
    }

    private async forceStatus(machineId: string, next: MachineStatusEnum) {
        const status = await this.prisma.machineStatus.findUnique({
            where: { machineId },
        });

        if (!status) {
            await this.prisma.machineStatus.create({
                data: {
                    machine: { connect: { id: machineId } },
                    status: next,
                },
            });
            return;
        }

        await this.prisma.machineStatus.update({
            where: { machineId },
            data: { status: next },
        });
    }
}

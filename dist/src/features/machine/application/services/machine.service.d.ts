import { AbstractService } from '@shared/application/services/abstract.service';
import { MachineRepository } from '@features/machine/domain/ports/machine.repository.port';
import { MachineMapper } from '@features/machine/application/mappers/machine.mapper';
import { MachineEntity } from '@features/machine/domain/entities/machine.entity';
import { MachineDto } from '@features/machine/interface/http/dtos/machine.dto';
import { CreateMachineDto } from '@features/machine/interface/http/dtos/create-machine.dto';
import { EditMachineDto } from '@features/machine/interface/http/dtos/edit-machine.dto';
import { MachineFilterDto } from '@features/machine/interface/http/dtos/machine-filter.dto';
import { PrismaService } from '@core/database/prisma.service';
export declare class MachineService extends AbstractService<MachineEntity, string, MachineDto, CreateMachineDto, EditMachineDto, MachineFilterDto> {
    private readonly prisma;
    constructor(repo: MachineRepository, mapper: MachineMapper, prisma: PrismaService);
    startProgram(machineId: string, programId: string, personId: string): Promise<void>;
    pauseProgram(machineId: string): Promise<void>;
    resumeProgram(machineId: string): Promise<void>;
    stopProgram(machineId: string): Promise<void>;
    setOutOfOrder(machineId: string): Promise<void>;
    markAvailable(machineId: string): Promise<void>;
    private updateStatus;
    private forceStatus;
}

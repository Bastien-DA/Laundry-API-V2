import { PrismaService } from '@core/database/prisma.service';
import { MachineEntity } from '@features/machine/domain/entities/machine.entity';
import {
    CreateMachineCommand,
    EditMachineCommand,
    MachineFilter,
    MachineRepository,
} from '@features/machine/domain/ports/machine.repository.port';
import {Injectable} from "@nestjs/common";

type Sort = { field: 'name' | 'price'; direction: 'asc' | 'desc' };

@Injectable()
export class PrismaMachineRepository implements MachineRepository {
    constructor(private readonly prisma: PrismaService) {}

    private toEntity(row: any): MachineEntity {
        return new MachineEntity(
            row.id,
            row.name,
            row.type,
            row.price?.toString?.() ?? String(row.price),

            row.laundryId,
            row.personId ?? null,

            row.machineStatus?.id ?? null,
            row.machineStatus?.status ?? null,
            row.machineStatus?.currentProgramId ?? null,

            (row.programs ?? []).map((p: any) => p.id),
        );
    }

    private buildWhere(filter?: MachineFilter): any {
        const where: any = {};
        if (!filter) return where;

        if (filter.laundryId) where.laundryId = filter.laundryId;
        if (filter.personId) where.personId = filter.personId;
        if (filter.type) where.type = filter.type;
        if (filter.programId) where.programs = { some: { id: filter.programId } };

        return where;
    }

    private buildOrderBy(sort?: Sort): any {
        if (!sort) return { name: 'asc' };
        return { [sort.field]: sort.direction };
    }

    async findById(id: string): Promise<MachineEntity | null> {
        const row = await this.prisma.machine.findUnique({
            where: { id },
            include: {
                programs: true,
                machineStatus: true,
            },
        });

        return row ? this.toEntity(row) : null;
    }

    async findMany(params?: { filter?: MachineFilter; sort?: Sort }): Promise<MachineEntity[]> {
        const rows = await this.prisma.machine.findMany({
            where: this.buildWhere(params?.filter),
            orderBy: this.buildOrderBy(params?.sort),
            include: {
                programs: true,
                machineStatus: true,
            },
        });

        return rows.map((r) => this.toEntity(r));
    }

    async create(cmd: CreateMachineCommand): Promise<MachineEntity> {
        const row = await this.prisma.machine.create({
            data: {
                name: cmd.name,
                type: cmd.type,
                price: cmd.price as any,

                laundry: { connect: { id: cmd.laundryId } },

                ...(cmd.personId && { person: { connect: { id: cmd.personId } } }),

                ...(cmd.programIds?.length && {
                    programs: { connect: cmd.programIds.map((id) => ({ id })) },
                }),
            },
            include: {
                programs: true,
                machineStatus: true,
            },
        });

        return this.toEntity(row);
    }

    async update(id: string, cmd: EditMachineCommand): Promise<MachineEntity> {
        const personProvided = cmd.personId !== undefined;

        const row = await this.prisma.machine.update({
            where: { id },
            data: {
                ...(cmd.name !== undefined && { name: cmd.name }),
                ...(cmd.type !== undefined && { type: cmd.type }),
                ...(cmd.price !== undefined && { price: cmd.price as any }),

                ...(personProvided &&
                    (cmd.personId
                        ? { person: { connect: { id: cmd.personId } } }
                        : { person: { disconnect: true } })),

                ...(cmd.programIds !== undefined && {
                    programs: { set: cmd.programIds.map((x) => ({ id: x })) },
                }),
            },
            include: {
                programs: true,
                machineStatus: true,
            },
        });

        return this.toEntity(row);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.machine.delete({ where: { id } });
    }
}

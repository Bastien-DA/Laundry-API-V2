import { PrismaService } from '@core/database/prisma.service';
import { ProgramEntity } from '@features/program/domain/entities/program.entity';
import {
    CreateProgramCommand,
    EditProgramCommand,
    ProgramFilter,
    ProgramRepository,
} from '@features/program/domain/ports/program.repository.port';

type Sort = { field: 'name' | 'duration'; direction: 'asc' | 'desc' };

export class PrismaProgramRepository implements ProgramRepository {
    constructor(private readonly prisma: PrismaService) {}

    private toEntity(row: any): ProgramEntity {
        return new ProgramEntity(
            row.id,
            row.name,
            row.temperature,
            row.speed,
            row.duration,
            (row.machines ?? []).map((m: any) => m.id),
            (row.currentOnStatuses ?? []).map((s: any) => s.id),
        );
    }

    private buildWhere(filter?: ProgramFilter): any {
        const where: any = {};
        if (!filter) return where;

        if (filter.nameContains) {
            where.name = { contains: filter.nameContains, mode: 'insensitive' };
        }

        if (filter.machineId) {
            where.machines = { some: { id: filter.machineId } };
        }

        return where;
    }

    private buildOrderBy(sort?: Sort): any {
        if (!sort) return { name: 'asc' };
        return { [sort.field]: sort.direction };
    }

    async findById(id: string): Promise<ProgramEntity | null> {
        const row = await this.prisma.program.findUnique({
            where: { id },
            include: {
                machines: true,
                currentOnStatuses: true,
            },
        });

        return row ? this.toEntity(row) : null;
    }

    async findMany(params?: { filter?: ProgramFilter; sort?: Sort }): Promise<ProgramEntity[]> {
        const rows = await this.prisma.program.findMany({
            where: this.buildWhere(params?.filter),
            orderBy: this.buildOrderBy(params?.sort),
            include: {
                machines: true,
                currentOnStatuses: true,
            },
        });

        return rows.map((r) => this.toEntity(r));
    }

    async create(cmd: CreateProgramCommand): Promise<ProgramEntity> {
        const row = await this.prisma.program.create({
            data: {
                name: cmd.name,
                temperature: cmd.temperature,
                speed: cmd.speed,
                duration: cmd.duration,

                ...(cmd.machineIds?.length && {
                    machines: { connect: cmd.machineIds.map((id) => ({ id })) },
                }),
            },
            include: {
                machines: true,
                currentOnStatuses: true,
            },
        });

        return this.toEntity(row);
    }

    async update(id: string, cmd: EditProgramCommand): Promise<ProgramEntity> {
        const row = await this.prisma.program.update({
            where: { id },
            data: {
                ...(cmd.name !== undefined && { name: cmd.name }),
                ...(cmd.temperature !== undefined && { temperature: cmd.temperature }),
                ...(cmd.speed !== undefined && { speed: cmd.speed }),
                ...(cmd.duration !== undefined && { duration: cmd.duration }),

                ...(cmd.machineIds !== undefined && {
                    machines: { set: cmd.machineIds.map((x) => ({ id: x })) },
                }),
            },
            include: {
                machines: true,
                currentOnStatuses: true,
            },
        });

        return this.toEntity(row);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.program.delete({ where: { id } });
    }
}

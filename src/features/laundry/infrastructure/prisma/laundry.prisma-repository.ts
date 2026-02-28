import { PrismaService } from '@core/database/prisma.service';
import { LaundryEntity } from '@features/laundry/domain/entities/laundry.entity';
import {
    CreateLaundryCommand,
    EditLaundryCommand,
    LaundryFilter, LaundryRepository,
} from '@features/laundry/domain/ports/laundry.repository.port';
import {Injectable} from "@nestjs/common";

type Sort = { field: 'createdAt' | 'name'; direction: 'asc' | 'desc' };

@Injectable()
export class PrismaLaundryRepository implements LaundryRepository {
    constructor(private readonly prisma: PrismaService) {}

    private toEntity(row: any): LaundryEntity {
        return new LaundryEntity(
            row.id,
            row.name,
            row.hours,
            row.address,
            row.latitude?.toString?.() ?? String(row.latitude),
            row.longitude?.toString?.() ?? String(row.longitude),
            row.createdAt,
            row.personId, // FK scalar => pas besoin d'include person
            (row.machines ?? []).map((m: any) => m.id), // on ne garde que les IDs
        );
    }

    private buildWhere(filter?: LaundryFilter): any {
        const where: any = {};
        if (!filter) return where;

        if (filter.nameContains) {
            where.name = { contains: filter.nameContains, mode: 'insensitive' };
        }
        if (filter.personId) where.personId = filter.personId;
        if (filter.machineId) where.machines = { some: { id: filter.machineId } };

        return where;
    }

    private buildOrderBy(sort?: Sort): any {
        if (!sort) return { createdAt: 'desc' };
        return { [sort.field]: sort.direction };
    }

    async findById(id: string): Promise<LaundryEntity | null> {
        const row = await this.prisma.laundry.findUnique({
            where: { id },
            include: {
                machines: true, // 👈 pas de select
            },
        });

        return row ? this.toEntity(row) : null;
    }

    async findMany(params?: { filter?: LaundryFilter; sort?: Sort }): Promise<LaundryEntity[]> {
        const rows = await this.prisma.laundry.findMany({
            where: this.buildWhere(params?.filter),
            orderBy: this.buildOrderBy(params?.sort),
            include: {
                machines: true, // 👈 pas de select
            },
        });

        return rows.map((r) => this.toEntity(r));
    }

    async create(cmd: CreateLaundryCommand): Promise<LaundryEntity> {
        const row = await this.prisma.laundry.create({
            data: {
                name: cmd.name,
                hours: cmd.hours,
                address: cmd.address,
                latitude: cmd.latitude as any,
                longitude: cmd.longitude as any,
                person: { connect: { id: cmd.personId } },

                ...(cmd.machineIds?.length && {
                    machines: { connect: cmd.machineIds.map((id) => ({ id })) },
                }),
            },
            include: {
                machines: true,
            },
        });

        return this.toEntity(row);
    }

    async update(id: string, cmd: EditLaundryCommand): Promise<LaundryEntity> {
        const row = await this.prisma.laundry.update({
            where: { id },
            data: {
                ...(cmd.name !== undefined && { name: cmd.name }),
                ...(cmd.hours !== undefined && { hours: cmd.hours }),
                ...(cmd.address !== undefined && { address: cmd.address }),
                ...(cmd.latitude !== undefined && { latitude: cmd.latitude as any }),
                ...(cmd.longitude !== undefined && { longitude: cmd.longitude as any }),

                ...(cmd.personId !== undefined && {
                    person: { connect: { id: cmd.personId } },
                }),

                ...(cmd.machineIds !== undefined && {
                    machines: { set: cmd.machineIds.map((x) => ({ id: x })) },
                }),
            },
            include: {
                machines: true,
            },
        });

        return this.toEntity(row);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.laundry.delete({ where: { id } });
    }
}

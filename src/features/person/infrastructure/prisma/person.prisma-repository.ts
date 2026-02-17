import { PrismaService } from '@core/database/prisma.service';
import { PersonEntity } from '@features/person/domain/entities/person.entity';
import {
    CreatePersonCommand,
    EditPersonCommand,
    PersonFilter, PersonRepository,
} from '@features/person/domain/ports/person.repository.port';

type Sort = { field: 'username' | 'personType' | 'id'; direction: 'asc' | 'desc' };

export class PrismaPersonRepository implements PersonRepository{
    constructor(private readonly prisma: PrismaService) {}

    private toEntity(row: any): PersonEntity {
        return new PersonEntity(
            row.id,
            row.username,
            row.personType,
            (row.laundries ?? []).map((x: any) => x.id),
            (row.machines ?? []).map((x: any) => x.id),
            row.user?.id ?? null,
        );
    }

    private buildWhere(filter?: PersonFilter): any {
        const where: any = {};
        if (!filter) return where;

        if (filter.usernameContains) {
            where.username = { contains: filter.usernameContains, mode: 'insensitive' };
        }
        if (filter.personType) where.personType = filter.personType;

        if (filter.laundryId) where.laundries = { some: { id: filter.laundryId } };
        if (filter.machineId) where.machines = { some: { id: filter.machineId } };

        if (filter.hasUser === true) where.user = { isNot: null };
        if (filter.hasUser === false) where.user = { is: null };
        if (filter.userId) where.user = { is: { id: filter.userId } };

        return where;
    }

    private buildOrderBy(sort?: Sort): any {
        if (!sort) return { username: 'asc' };
        return { [sort.field]: sort.direction };
    }

    async findById(id: string): Promise<PersonEntity | null> {
        const row = await this.prisma.person.findUnique({
            where: { id },
            select: { id:true },
        });
        return row ? this.toEntity(row) : null;
    }

    async findMany(params?: { filter?: PersonFilter; sort?: Sort }): Promise<PersonEntity[]> {
        const rows = await this.prisma.person.findMany({
            where: this.buildWhere(params?.filter),
            orderBy: this.buildOrderBy(params?.sort),
            select: { id:true },
        });
        return rows.map((r: any) => this.toEntity(r));
    }

    async create(cmd: CreatePersonCommand): Promise<PersonEntity> {
        const row = await this.prisma.person.create({
            data: {
                username: cmd.username,
                personType: cmd.personType,

                ...(cmd.laundryIds?.length ? { laundries: { connect: cmd.laundryIds.map((id) => ({ id })) } } : {}),
                ...(cmd.machineIds?.length ? { machines: { connect: cmd.machineIds.map((id) => ({ id })) } } : {}),
                ...(cmd.userId ? { user: { connect: { id: cmd.userId } } } : {}),
            },
            select: { id:true },
        });

        return this.toEntity(row);
    }

    async update(id: string, cmd: EditPersonCommand): Promise<PersonEntity> {
        const userIdProvided = cmd.userId !== undefined;

        const row = await this.prisma.person.update({
            where: { id },
            data: {
                ...(cmd.username !== undefined ? { username: cmd.username } : {}),
                ...(cmd.personType !== undefined ? { personType: cmd.personType } : {}),

                ...(cmd.laundryIds !== undefined
                    ? { laundries: { set: cmd.laundryIds.map((x) => ({ id: x })) } }
                    : {}),
                ...(cmd.machineIds !== undefined
                    ? { machines: { set: cmd.machineIds.map((x) => ({ id: x })) } }
                    : {}),

                ...(userIdProvided
                    ? cmd.userId
                        ? { user: { connect: { id: cmd.userId } } }
                        : { user: { disconnect: true } }
                    : {}),
            },
            select: { id:true },
        });

        return this.toEntity(row);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.person.delete({ where: { id } });
    }
}

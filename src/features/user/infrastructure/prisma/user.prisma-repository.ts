import { PrismaService } from '@core/database/prisma.service';
import { UserEntity } from '@features/user/domain/entities/user.entity';
import {
  CreateUserCommand,
  EditUserCommand,
  UserFilter,
  UserRepository,
} from '@features/user/domain/ports/user.repository.port';

type Sort = { field: 'createdAt' | 'email'; direction: 'asc' | 'desc' };

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  private toEntity(row: any): UserEntity {
    // ✅ Person est 0..1, mais côté User tu as déjà personId en scalar
    return new UserEntity(
        row.id,
        row.email,
        row.createdAt,
        row.personId ?? null,
    );
  }

  private buildWhere(filter?: UserFilter): any {
    const where: any = {};
    if (!filter) return where;

    if (filter.emailContains) {
      where.email = { contains: filter.emailContains, mode: 'insensitive' };
    }

    if (filter.hasPerson === true) where.personId = { not: null };
    if (filter.hasPerson === false) where.personId = null;

    if (filter.personId) where.personId = filter.personId;

    return where;
  }

  private buildOrderBy(sort?: Sort): any {
    if (!sort) return { createdAt: 'desc' };
    return { [sort.field]: sort.direction };
  }

  async findById(id: string): Promise<UserEntity | null> {
    const row = await this.prisma.user.findUnique({
      where: { id },
      // ✅ pas besoin d'include person, on veut seulement personId
      // ✅ et surtout pas de passwordHash
      select: {
        id: true,
        email: true,
        createdAt: true,
        personId: true,
      },
    });

    return row ? this.toEntity(row) : null;
  }

  async findMany(params?: { filter?: UserFilter; sort?: Sort }): Promise<UserEntity[]> {
    const rows = await this.prisma.user.findMany({
      where: this.buildWhere(params?.filter),
      orderBy: this.buildOrderBy(params?.sort),
      select: {
        id: true,
        email: true,
        createdAt: true,
        personId: true,
      },
    });

    return rows.map((r: any) => this.toEntity(r));
  }

  async create(cmd: CreateUserCommand): Promise<UserEntity> {
    const row = await this.prisma.user.create({
      data: {
        email: cmd.email,
        passwordHash: cmd.passwordHash,
        // ✅ Auth gère passwordHash => on n'y touche jamais ici
        ...(cmd.personId ? { person: { connect: { id: cmd.personId } } } : {}),
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
        personId: true,
      },
    });

    return this.toEntity(row);
  }

  async update(id: string, cmd: EditUserCommand): Promise<UserEntity> {
    const personIdProvided = cmd.personId !== undefined;

    const row = await this.prisma.user.update({
      where: { id },
      data: {
        ...(cmd.email !== undefined ? { email: cmd.email } : {}),

        ...(personIdProvided
            ? cmd.personId
                ? { person: { connect: { id: cmd.personId } } }
                : { person: { disconnect: true } }
            : {}),
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
        personId: true,
      },
    });

    return this.toEntity(row);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}

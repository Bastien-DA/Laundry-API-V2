import { Prisma } from '@prisma/client';
import { PrismaService as AppPrismaService } from '@core/database/prisma.service';
import { PrismaAbstractRepository } from '@shared/infrastructure/prisma/prisma-abstract.repository';
import { UserEntity } from '@features/user/domain/entities/user.entity';
import {
  CreateUserCommand,
  EditUserCommand,
  UserFilter,
} from '@features/user/domain/ports/user.repository.port';

type Sort = { field: string; direction: 'asc' | 'desc' };

// Payload minimal : scalaires + relation Person uniquement avec son id
type UserRow = Prisma.UserGetPayload<{
  select: {
    id: true;
    email: true;
    createdAt: true;
    personId: true;
    person: { select: { id: true } };
  };
}>;

export class PrismaUserRepository extends PrismaAbstractRepository<
  UserEntity,
  string,
  CreateUserCommand,
  EditUserCommand,
  UserFilter,
  UserRow,
  Prisma.UserWhereInput,
  Prisma.UserCreateInput,
  Prisma.UserUpdateInput,
  Prisma.UserOrderByWithRelationInput
> {
  // Delegate Prisma model
  protected delegate: AppPrismaService['user'];

  constructor(private readonly prisma: AppPrismaService) {
    super();
    this.delegate = prisma.user;
  }

  protected whereId(id: string) {
    return { id };
  }

  protected toEntity(row: UserRow): UserEntity {
    // Person est optionnelle (0..1)
    const personId = row.person?.id ?? row.personId ?? null;
    return new UserEntity(row.id, row.email, row.createdAt, personId);
  }

  protected buildWhere(filter?: UserFilter): Prisma.UserWhereInput {
    const where: Prisma.UserWhereInput = {};
    if (!filter) return where;

    if (filter.emailContains) {
      where.email = { contains: filter.emailContains, mode: 'insensitive' };
    }

    if (filter.hasPerson === true) where.personId = { not: null };
    if (filter.hasPerson === false) where.personId = null;

    if (filter.personId) where.personId = filter.personId;

    return where;
  }

  protected buildOrderBy(sort?: Sort): Prisma.UserOrderByWithRelationInput {
    if (!sort) return { createdAt: 'desc' };

    // Whitelist (évite de laisser trier sur n'importe quel champ)
    const allowed = new Set(['createdAt', 'email']);
    if (!allowed.has(sort.field)) return { createdAt: 'desc' };

    return {
      [sort.field]: sort.direction,
    } as Prisma.UserOrderByWithRelationInput;
  }

  protected toCreateInput(cmd: CreateUserCommand): Prisma.UserCreateInput {
    return {
      email: cmd.email,

      // ✅ Auth gère passwordHash => on n'y touche pas ici
      // Relation 1–1 optionnelle : connect via id
      ...(cmd.personId ? { person: { connect: { id: cmd.personId } } } : {}),
    };
  }

  protected toUpdateInput(cmd: EditUserCommand): Prisma.UserUpdateInput {
    const personIdProvided = cmd.personId !== undefined;

    return {
      ...(cmd.email !== undefined ? { email: cmd.email } : {}),

      // ✅ Auth gère passwordHash => on n'y touche pas ici
      ...(personIdProvided
        ? cmd.personId
          ? { person: { connect: { id: cmd.personId } } }
          : { person: { disconnect: true } }
        : {}),
    };
  }

  /**
   * findById avec select minimal (IDs only)
   */
  async findById(id: string): Promise<UserEntity | null> {
    const row = await this.delegate.findUnique({
      where: this.whereId(id),
      select: {
        id: true,
        email: true,
        createdAt: true,
        personId: true,
        person: { select: { id: true } },
      },
    });

    return row ? this.toEntity(row as UserRow) : null;
  }

  /**
   * findMany avec select minimal + where + orderBy
   */
  async findMany(params?: {
    filter?: UserFilter;
    sort?: Sort;
  }): Promise<UserEntity[]> {
    const rows = await this.delegate.findMany({
      where: this.buildWhere(params?.filter),
      orderBy: this.buildOrderBy(params?.sort),
      select: {
        id: true,
        email: true,
        createdAt: true,
        personId: true,
        person: { select: { id: true } },
      },
    });

    return rows.map((r) => this.toEntity(r as UserRow));
  }

  /**
   * create (ne touche pas passwordHash)
   */
  async create(data: CreateUserCommand): Promise<UserEntity> {
    const input = this.toCreateInput(data);

    const row = await this.delegate.create({
      data: input,
      select: {
        id: true,
        email: true,
        createdAt: true,
        personId: true,
        person: { select: { id: true } },
      },
    });

    return this.toEntity(row as UserRow);
  }

  /**
   * update (ne touche pas passwordHash)
   */
  async update(id: string, data: EditUserCommand): Promise<UserEntity> {
    const input = this.toUpdateInput(data);

    const row = await this.delegate.update({
      where: this.whereId(id),
      data: input,
      select: {
        id: true,
        email: true,
        createdAt: true,
        personId: true,
        person: { select: { id: true } },
      },
    });

    return this.toEntity(row as UserRow);
  }

  /**
   * delete
   */
  async delete(id: string): Promise<void> {
    await this.delegate.delete({ where: this.whereId(id) });
  }
}

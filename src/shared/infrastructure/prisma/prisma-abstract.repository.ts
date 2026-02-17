import { AbstractRepository } from '../../domain/ports/abstract.repository';
import { ListParams } from '../../application/types/list-params';

export abstract class PrismaAbstractRepository<
  TEntity,
  TId,
  TCreate,
  TEdit,
  TFilter,
  TModel,
  TWhere,
  TCreateInput,
  TUpdateInput,
  TOrderBy,
> extends AbstractRepository<TEntity, TId, TCreate, TEdit, TFilter> {
  // ✅ IMPORTANT: on ne contraint PAS les retours du delegate
  // car Prisma delegate est générique selon select/include.
  protected abstract delegate: {
    findUnique(args: any): Promise<any>;
    findMany(args: any): Promise<any[]>;
    create(args: any): Promise<any>;
    update(args: any): Promise<any>;
    delete(args: any): Promise<any>;
  };

  protected abstract toEntity(model: TModel): TEntity;
  protected abstract buildWhere(filter?: TFilter): TWhere;
  protected abstract buildOrderBy(sort?: {
    field: string;
    direction: 'asc' | 'desc';
  }): TOrderBy;
  protected abstract toCreateInput(data: TCreate): TCreateInput;
  protected abstract toUpdateInput(data: TEdit): TUpdateInput;
  protected abstract whereId(id: TId): any;

  async findById(id: TId): Promise<TEntity | null> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const row = await this.delegate.findUnique({ where: this.whereId(id) });
    return row ? this.toEntity(row as TModel) : null;
  }

  async findMany(params?: ListParams<TFilter>): Promise<TEntity[]> {
    const rows = await this.delegate.findMany({
      where: this.buildWhere(params?.filter),
      orderBy: this.buildOrderBy(params?.sort),
    });
    return rows.map((r) => this.toEntity(r as TModel));
  }

  async create(data: TCreate): Promise<TEntity> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const row = await this.delegate.create({ data: this.toCreateInput(data) });
    return this.toEntity(row as TModel);
  }

  async update(id: TId, data: TEdit): Promise<TEntity> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const row = await this.delegate.update({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      where: this.whereId(id),
      data: this.toUpdateInput(data),
    });
    return this.toEntity(row as TModel);
  }

  async delete(id: TId): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    await this.delegate.delete({ where: this.whereId(id) });
  }
}

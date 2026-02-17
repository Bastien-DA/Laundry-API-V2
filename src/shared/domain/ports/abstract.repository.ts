import { ListParams } from '../../application/types/list-params';

export type Sort = { field: string; direction: 'asc' | 'desc' };

export abstract class AbstractRepository<TEntity, TId, TCreate, TEdit, TFilter> {
  abstract findById(id: TId): Promise<TEntity | null>;
  abstract findMany(params?: ListParams<TFilter>): Promise<TEntity[]>;

  abstract create(data: TCreate): Promise<TEntity>;
  abstract update(id: TId, data: TEdit): Promise<TEntity>;
  abstract delete(id: TId): Promise<void>;
}

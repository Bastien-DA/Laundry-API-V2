import { ListParams } from '@shared/application/types/list-params';
import { AbstractMapper } from '@shared/application/mappers/abstract.mapper';
import { AbstractRepository } from '@shared//domain/ports/abstract.repository';
export declare abstract class AbstractService<TEntity, TId, TDto, TCreateDto, TEditDto, TFilterDto> {
    protected readonly repo: AbstractRepository<TEntity, TId, any, any, TFilterDto>;
    protected readonly mapper: AbstractMapper<TEntity, TDto, TCreateDto, TEditDto>;
    protected constructor(repo: AbstractRepository<TEntity, TId, any, any, TFilterDto>, mapper: AbstractMapper<TEntity, TDto, TCreateDto, TEditDto>);
    getById(id: TId): Promise<TDto>;
    list(params?: ListParams<TFilterDto>): Promise<TDto[]>;
    create(dto: TCreateDto): Promise<TDto>;
    edit(id: TId, dto: TEditDto): Promise<TDto>;
    remove(id: TId): Promise<void>;
}

import { NotFoundException } from '@nestjs/common';
import { ListParams } from '../types/list-params';
import { AbstractMapper } from '../mappers/abstract.mapper';
import { AbstractRepository } from '../../domain/ports/abstract.repository';

export abstract class AbstractService<
  TEntity,
  TId,
  TDto,
  TCreateDto,
  TEditDto,
  TFilterDto
> {
  protected constructor(
    protected readonly repo: AbstractRepository<TEntity, TId, any, any, TFilterDto>,
    protected readonly mapper: AbstractMapper<TEntity, TDto, TCreateDto, TEditDto>,
  ) {}

  async getById(id: TId): Promise<TDto> {
    const entity = await this.repo.findById(id);
    if (!entity) throw new NotFoundException();
    return this.mapper.toDto(entity);
  }

  async list(params?: ListParams<TFilterDto>): Promise<TDto[]> {
    const items = await this.repo.findMany(params);
    return items.map((e) => this.mapper.toDto(e));
  }

  async create(dto: TCreateDto): Promise<TDto> {
    const data = this.mapper.fromCreateDto(dto);
    const entity = await this.repo.create(data as any);
    return this.mapper.toDto(entity);
  }

  async edit(id: TId, dto: TEditDto): Promise<TDto> {
    const data = this.mapper.fromEditDto(dto);
    const entity = await this.repo.update(id, data as any);
    return this.mapper.toDto(entity);
  }

  async remove(id: TId): Promise<void> {
    await this.repo.delete(id);
  }
}

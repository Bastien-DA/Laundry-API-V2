export interface AbstractMapper<TEntity, TDto, TCreateDto, TEditDto> {
  toDto(entity: TEntity): TDto;
  fromCreateDto(dto: TCreateDto): unknown;
  fromEditDto(dto: TEditDto): unknown;
}

import { Sort } from '@shared/domain/ports/abstract.repository';

export type ListParams<TFilter> = {
  filter?: TFilter;
  sort?: Sort;
};
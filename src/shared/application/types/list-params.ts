import { Sort } from '../../domain/ports/abstract.repository';

export type ListParams<TFilter> = {
  filter?: TFilter;
  sort?: Sort;
};
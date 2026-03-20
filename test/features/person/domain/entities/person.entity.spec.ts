import { PersonEntity } from '@features/person/domain/entities/person.entity';

describe('PersonEntity', () => {
  it('should store constructor values', () => {
    const entity = new PersonEntity('p1', 'john', 'CUSTOMER' as any, ['l1'], ['m1'], null);

    expect(entity.id).toBe('p1');
    expect(entity.personType).toBe('CUSTOMER');
    expect(entity.userId).toBeNull();
  });
});

import { PersonMapper } from '@features/person/application/mappers/person.mapper';

describe('PersonMapper', () => {
  const mapper = new PersonMapper();

  it('toDto should map person entity', () => {
    const dto = mapper.toDto({
      id: 'p1',
      username: 'john',
      personType: 'CUSTOMER',
      laundryIds: ['l1'],
      machineIds: ['m1'],
      userId: null,
    } as any);

    expect(dto.username).toBe('john');
    expect(dto.personType).toBe('CUSTOMER');
  });

  it('fromCreateDto should default laundryIds and machineIds to empty arrays', () => {
    const cmd = mapper.fromCreateDto({
      username: 'john',
      personType: 'CUSTOMER',
    } as any);

    expect(cmd.laundryIds).toEqual([]);
    expect(cmd.machineIds).toEqual([]);
    expect(cmd.userId).toBeNull();
  });
});

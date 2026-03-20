import { MachineMapper } from '@features/machine/application/mappers/machine.mapper';

describe('MachineMapper', () => {
  const mapper = new MachineMapper();

  it('toDto should map machine entity', () => {
    const dto = mapper.toDto({
      id: 'm1',
      name: 'Washer 1',
      type: 'WASHER',
      price: '4.5',
      laundryId: 'l1',
      personId: null,
      machineStatusId: 'ms1',
      status: 'AVAILABLE',
      currentProgramId: null,
      programIds: ['pr1'],
    } as any);

    expect(dto.id).toBe('m1');
    expect(dto.programIds).toEqual(['pr1']);
  });

  it('fromCreateDto should default optional arrays and nullable fields', () => {
    const cmd = mapper.fromCreateDto({
      name: 'Washer 1',
      type: 'WASHER',
      price: '4.5',
      laundryId: 'l1',
    } as any);

    expect(cmd.personId).toBeNull();
    expect(cmd.programIds).toEqual([]);
  });
});

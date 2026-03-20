import { LaundryMapper } from '@features/laundry/application/mappers/laundry.mapper';

describe('LaundryMapper', () => {
  const mapper = new LaundryMapper();

  it('toDto should map laundry entity', () => {
    const dto = mapper.toDto({
      id: 'l1',
      name: 'Wash One',
      hours: '24/7',
      address: '1 street',
      latitude: '12.34',
      longitude: '56.78',
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
      personId: 'p1',
      machineIds: ['m1'],
    } as any);

    expect(dto.id).toBe('l1');
    expect(dto.machineIds).toEqual(['m1']);
    expect(dto.createdAt).toBe(new Date('2026-01-01T00:00:00.000Z').getTime());
  });

  it('fromCreateDto should default machineIds to empty array', () => {
    const cmd = mapper.fromCreateDto({
      name: 'Wash One',
      hours: '24/7',
      address: '1 street',
      latitude: '12.34',
      longitude: '56.78',
      personId: 'p1',
    } as any);

    expect(cmd.machineIds).toEqual([]);
  });
});

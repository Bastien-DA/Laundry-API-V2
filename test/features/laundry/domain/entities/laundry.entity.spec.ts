import { LaundryEntity } from '@features/laundry/domain/entities/laundry.entity';

describe('LaundryEntity', () => {
  it('should store constructor values', () => {
    const entity = new LaundryEntity(
      'l1',
      'Wash One',
      '24/7',
      '1 street',
      '12.34',
      '56.78',
      new Date('2026-01-01T00:00:00.000Z'),
      'p1',
      ['m1'],
    );

    expect(entity.id).toBe('l1');
    expect(entity.machineIds).toEqual(['m1']);
  });
});

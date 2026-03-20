import { MachineEntity } from '@features/machine/domain/entities/machine.entity';

describe('MachineEntity', () => {
  it('should store constructor values', () => {
    const entity = new MachineEntity(
      'm1',
      'Washer 1',
      'WASHER' as any,
      '4.5',
      'l1',
      null,
      'ms1',
      'AVAILABLE' as any,
      null,
      ['pr1'],
    );

    expect(entity.id).toBe('m1');
    expect(entity.status).toBe('AVAILABLE');
    expect(entity.programIds).toEqual(['pr1']);
  });
});

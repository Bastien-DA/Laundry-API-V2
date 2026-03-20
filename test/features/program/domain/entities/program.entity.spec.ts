import { ProgramEntity } from '@features/program/domain/entities/program.entity';

describe('ProgramEntity', () => {
  it('should store constructor values', () => {
    const entity = new ProgramEntity('pr1', 'Eco', 30, 800, 45, ['m1'], ['ms1']);

    expect(entity.id).toBe('pr1');
    expect(entity.machineStatusIds).toEqual(['ms1']);
  });
});

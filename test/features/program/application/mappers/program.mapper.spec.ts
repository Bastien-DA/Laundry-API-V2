import { ProgramMapper } from '@features/program/application/mappers/program.mapper';

describe('ProgramMapper', () => {
  const mapper = new ProgramMapper();

  it('toDto should map program entity', () => {
    const dto = mapper.toDto({
      id: 'pr1',
      name: 'Eco',
      temperature: 30,
      speed: 800,
      duration: 45,
      machineIds: ['m1'],
      machineStatusIds: ['ms1'],
    } as any);

    expect(dto).toEqual({
      id: 'pr1',
      name: 'Eco',
      temperature: 30,
      speed: 800,
      duration: 45,
      machineIds: ['m1'],
      machineStatusIds: ['ms1'],
    });
  });

  it('fromCreateDto should default machineIds to empty array', () => {
    const cmd = mapper.fromCreateDto({
      name: 'Eco',
      temperature: 30,
      speed: 800,
      duration: 45,
    } as any);

    expect(cmd.machineIds).toEqual([]);
  });
});

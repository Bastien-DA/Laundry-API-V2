import { PrismaProgramRepository } from '@features/program/infrastructure/prisma/program.prisma-repository';

describe('PrismaProgramRepository', () => {
  const prismaMock = {
    program: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  let repository: PrismaProgramRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    repository = new PrismaProgramRepository(prismaMock as any);
  });

  it('findById should map relation ids', async () => {
    prismaMock.program.findUnique.mockResolvedValue({
      id: 'pr1',
      name: 'Eco',
      temperature: 30,
      speed: 800,
      duration: 45,
      machines: [{ id: 'm1' }],
      currentOnStatuses: [{ id: 'ms1' }],
    });

    const entity = await repository.findById('pr1');

    expect(entity?.machineIds).toEqual(['m1']);
    expect(entity?.machineStatusIds).toEqual(['ms1']);
  });

  it('findMany should apply filter and sort', async () => {
    prismaMock.program.findMany.mockResolvedValue([]);

    await repository.findMany({
      filter: { nameContains: 'eco', machineId: 'm1' } as any,
      sort: { field: 'duration', direction: 'desc' },
    });

    expect(prismaMock.program.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          name: { contains: 'eco', mode: 'insensitive' },
          machines: { some: { id: 'm1' } },
        }),
        orderBy: { duration: 'desc' },
      }),
    );
  });

  it('create/update/delete should call prisma', async () => {
    prismaMock.program.create.mockResolvedValue({
      id: 'pr1',
      name: 'Eco',
      temperature: 30,
      speed: 800,
      duration: 45,
      machines: [],
      currentOnStatuses: [],
    });
    prismaMock.program.update.mockResolvedValue({
      id: 'pr1',
      name: 'Eco+',
      temperature: 30,
      speed: 800,
      duration: 45,
      machines: [],
      currentOnStatuses: [],
    });
    prismaMock.program.delete.mockResolvedValue(undefined);

    await repository.create({ name: 'Eco', temperature: 30, speed: 800, duration: 45 } as any);
    await repository.update('pr1', { name: 'Eco+' } as any);
    await repository.delete('pr1');

    expect(prismaMock.program.create).toHaveBeenCalled();
    expect(prismaMock.program.update).toHaveBeenCalledWith(expect.objectContaining({ where: { id: 'pr1' } }));
    expect(prismaMock.program.delete).toHaveBeenCalledWith({ where: { id: 'pr1' } });
  });
});

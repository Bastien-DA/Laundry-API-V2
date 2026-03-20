import { PrismaMachineRepository } from '@features/machine/infrastructure/prisma/machine.prisma-repository';

describe('PrismaMachineRepository', () => {
  const prismaMock = {
    machine: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  let repository: PrismaMachineRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    repository = new PrismaMachineRepository(prismaMock as any);
  });

  it('findById should map status and program ids', async () => {
    prismaMock.machine.findUnique.mockResolvedValue({
      id: 'm1',
      name: 'Washer 1',
      type: 'WASHER',
      price: 4.5,
      laundryId: 'l1',
      personId: null,
      machineStatus: { id: 'ms1', status: 'AVAILABLE', currentProgramId: null },
      programs: [{ id: 'pr1' }],
    });

    const entity = await repository.findById('m1');

    expect(entity?.price).toBe('4.5');
    expect(entity?.programIds).toEqual(['pr1']);
    expect(entity?.status).toBe('AVAILABLE');
  });

  it('findMany should apply filters and sort', async () => {
    prismaMock.machine.findMany.mockResolvedValue([]);

    await repository.findMany({
      filter: {
        laundryId: 'l1',
        personId: 'p1',
        type: 'WASHER',
        programId: 'pr1',
      } as any,
      sort: { field: 'price', direction: 'desc' },
    });

    expect(prismaMock.machine.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          laundryId: 'l1',
          personId: 'p1',
          type: 'WASHER',
          programs: { some: { id: 'pr1' } },
        }),
        orderBy: { price: 'desc' },
      }),
    );
  });

  it('create/update/delete should call prisma', async () => {
    prismaMock.machine.create.mockResolvedValue({
      id: 'm1',
      name: 'Washer 1',
      type: 'WASHER',
      price: 4.5,
      laundryId: 'l1',
      personId: null,
      machineStatus: null,
      programs: [],
    });
    prismaMock.machine.update.mockResolvedValue({
      id: 'm1',
      name: 'Washer 2',
      type: 'WASHER',
      price: 5,
      laundryId: 'l1',
      personId: null,
      machineStatus: null,
      programs: [],
    });
    prismaMock.machine.delete.mockResolvedValue(undefined);

    await repository.create({ name: 'Washer 1', type: 'WASHER', price: '4.5', laundryId: 'l1' } as any);
    await repository.update('m1', { name: 'Washer 2', personId: null } as any);
    await repository.delete('m1');

    expect(prismaMock.machine.create).toHaveBeenCalled();
    expect(prismaMock.machine.update).toHaveBeenCalledWith(expect.objectContaining({ where: { id: 'm1' } }));
    expect(prismaMock.machine.delete).toHaveBeenCalledWith({ where: { id: 'm1' } });
  });
});

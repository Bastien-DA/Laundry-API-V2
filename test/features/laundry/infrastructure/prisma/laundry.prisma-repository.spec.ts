import { PrismaLaundryRepository } from '@features/laundry/infrastructure/prisma/laundry.prisma-repository';

describe('PrismaLaundryRepository', () => {
  const prismaMock = {
    laundry: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  let repository: PrismaLaundryRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    repository = new PrismaLaundryRepository(prismaMock as any);
  });

  it('findById should map machine ids and numeric values to strings', async () => {
    prismaMock.laundry.findUnique.mockResolvedValue({
      id: 'l1',
      name: 'Wash One',
      hours: '24/7',
      address: '1 street',
      latitude: 12.34,
      longitude: 56.78,
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
      personId: 'p1',
      machines: [{ id: 'm1' }],
    });

    const entity = await repository.findById('l1');

    expect(entity?.machineIds).toEqual(['m1']);
    expect(entity?.latitude).toBe('12.34');
    expect(entity?.longitude).toBe('56.78');
  });

  it('findMany should apply filter and sort', async () => {
    prismaMock.laundry.findMany.mockResolvedValue([]);

    await repository.findMany({
      filter: { nameContains: 'wash', personId: 'p1', machineId: 'm1' } as any,
      sort: { field: 'name', direction: 'asc' },
    });

    expect(prismaMock.laundry.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          name: { contains: 'wash', mode: 'insensitive' },
          personId: 'p1',
          machines: { some: { id: 'm1' } },
        }),
        orderBy: { name: 'asc' },
      }),
    );
  });

  it('create/update/delete should call prisma', async () => {
    prismaMock.laundry.create.mockResolvedValue({
      id: 'l1',
      name: 'Wash One',
      hours: '24/7',
      address: '1 street',
      latitude: '12.34',
      longitude: '56.78',
      createdAt: new Date(),
      personId: 'p1',
      machines: [],
    });
    prismaMock.laundry.update.mockResolvedValue({
      id: 'l1',
      name: 'Wash Two',
      hours: '24/7',
      address: '1 street',
      latitude: '12.34',
      longitude: '56.78',
      createdAt: new Date(),
      personId: 'p1',
      machines: [],
    });
    prismaMock.laundry.delete.mockResolvedValue(undefined);

    await repository.create({
      name: 'Wash One',
      hours: '24/7',
      address: '1 street',
      latitude: '12.34',
      longitude: '56.78',
      personId: 'p1',
      machineIds: ['m1'],
    } as any);
    await repository.update('l1', { name: 'Wash Two' } as any);
    await repository.delete('l1');

    expect(prismaMock.laundry.create).toHaveBeenCalled();
    expect(prismaMock.laundry.update).toHaveBeenCalledWith(expect.objectContaining({ where: { id: 'l1' } }));
    expect(prismaMock.laundry.delete).toHaveBeenCalledWith({ where: { id: 'l1' } });
  });
});

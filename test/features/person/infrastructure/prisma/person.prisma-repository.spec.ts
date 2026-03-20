import { PrismaPersonRepository } from '@features/person/infrastructure/prisma/person.prisma-repository';

describe('PrismaPersonRepository', () => {
  const prismaMock = {
    person: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  let repository: PrismaPersonRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    repository = new PrismaPersonRepository(prismaMock as any);
  });

  it('findById should map selected user id to userId', async () => {
    prismaMock.person.findUnique.mockResolvedValue({
      id: 'p1',
      username: 'john',
      personType: 'CUSTOMER',
      user: { id: 'u1' },
    });

    const entity = await repository.findById('p1');

    expect(entity?.id).toBe('p1');
    expect(entity?.userId).toBe('u1');
  });

  it('findMany should apply filters and sort', async () => {
    prismaMock.person.findMany.mockResolvedValue([{ id: 'p1' }]);

    await repository.findMany({
      filter: {
        usernameContains: 'jo',
        personType: 'CUSTOMER',
        laundryId: 'l1',
        machineId: 'm1',
        hasUser: true,
      } as any,
      sort: { field: 'username', direction: 'asc' },
    });

    expect(prismaMock.person.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          username: { contains: 'jo', mode: 'insensitive' },
          personType: 'CUSTOMER',
          laundries: { some: { id: 'l1' } },
          machines: { some: { id: 'm1' } },
          user: { isNot: null },
        }),
        orderBy: { username: 'asc' },
      }),
    );
  });

  it('create/update/delete should call prisma', async () => {
    prismaMock.person.create.mockResolvedValue({ id: 'p1' });
    prismaMock.person.update.mockResolvedValue({ id: 'p1' });
    prismaMock.person.delete.mockResolvedValue(undefined);

    await repository.create({ username: 'john', personType: 'CUSTOMER' } as any);
    await repository.update('p1', { username: 'john2', userId: null } as any);
    await repository.delete('p1');

    expect(prismaMock.person.create).toHaveBeenCalled();
    expect(prismaMock.person.update).toHaveBeenCalledWith(expect.objectContaining({ where: { id: 'p1' } }));
    expect(prismaMock.person.delete).toHaveBeenCalledWith({ where: { id: 'p1' } });
  });
});

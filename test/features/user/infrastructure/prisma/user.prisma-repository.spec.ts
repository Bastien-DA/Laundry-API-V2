import { PrismaUserRepository } from '@features/user/infrastructure/prisma/user.prisma-repository';

describe('PrismaUserRepository', () => {
  const prismaMock = {
    user: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  let repository: PrismaUserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    repository = new PrismaUserRepository(prismaMock as any);
  });

  it('findById should map row to entity', async () => {
    prismaMock.user.findUnique.mockResolvedValue({
      id: 'u1',
      email: 'john@example.com',
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
      personId: 'p1',
    });

    const entity = await repository.findById('u1');

    expect(prismaMock.user.findUnique).toHaveBeenCalledWith(
      expect.objectContaining({ where: { id: 'u1' } }),
    );
    expect(entity?.id).toBe('u1');
    expect(entity?.personId).toBe('p1');
  });

  it('findMany should apply filters and sort', async () => {
    prismaMock.user.findMany.mockResolvedValue([]);

    await repository.findMany({
      filter: { emailContains: 'john', hasPerson: true, personId: 'p1' } as any,
      sort: { field: 'email', direction: 'asc' },
    });

    expect(prismaMock.user.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          email: { contains: 'john', mode: 'insensitive' },
          personId: 'p1',
        }),
        orderBy: { email: 'asc' },
      }),
    );
  });

  it('create/update/delete should call prisma with expected mutations', async () => {
    prismaMock.user.create.mockResolvedValue({
      id: 'u1',
      email: 'john@example.com',
      createdAt: new Date(),
      personId: null,
    });
    prismaMock.user.update.mockResolvedValue({
      id: 'u1',
      email: 'john2@example.com',
      createdAt: new Date(),
      personId: null,
    });
    prismaMock.user.delete.mockResolvedValue(undefined);

    await repository.create({ email: 'john@example.com', passwordHash: 'hash' } as any);
    await repository.update('u1', { email: 'john2@example.com', personId: null } as any);
    await repository.delete('u1');

    expect(prismaMock.user.create).toHaveBeenCalled();
    expect(prismaMock.user.update).toHaveBeenCalledWith(
      expect.objectContaining({ where: { id: 'u1' } }),
    );
    expect(prismaMock.user.delete).toHaveBeenCalledWith({ where: { id: 'u1' } });
  });
});

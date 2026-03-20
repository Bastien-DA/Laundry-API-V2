import { UserService } from '@features/user/application/services/user.service';

describe('UserService', () => {
  const repoMock = {
    findById: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const mapperMock = {
    toDto: jest.fn(),
    fromCreateDto: jest.fn(),
    fromEditDto: jest.fn(),
  };

  let service: UserService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new UserService(repoMock as any, mapperMock as any);
  });

  it('inherits CRUD logic from AbstractService (create)', async () => {
    mapperMock.fromCreateDto.mockReturnValue({ email: 'john@example.com' });
    repoMock.create.mockResolvedValue({ id: 'u1', email: 'john@example.com' });
    mapperMock.toDto.mockReturnValue({ id: 'u1', email: 'john@example.com' });

    await expect(service.create({ email: 'john@example.com' } as any)).resolves.toEqual({
      id: 'u1',
      email: 'john@example.com',
    });
  });
});

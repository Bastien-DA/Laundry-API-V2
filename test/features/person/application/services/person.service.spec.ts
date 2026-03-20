import { PersonService } from '@features/person/application/services/person.service';

describe('PersonService', () => {
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

  let service: PersonService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new PersonService(repoMock as any, mapperMock as any);
  });

  it('inherits CRUD logic from AbstractService (remove)', async () => {
    repoMock.delete.mockResolvedValue(undefined);

    await expect(service.remove('person-1')).resolves.toBeUndefined();
    expect(repoMock.delete).toHaveBeenCalledWith('person-1');
  });
});

import { LaundryService } from '@features/laundry/application/services/laundry.service';

describe('LaundryService', () => {
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

  let service: LaundryService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new LaundryService(repoMock as any, mapperMock as any);
  });

  it('inherits CRUD logic from AbstractService (list)', async () => {
    repoMock.findMany.mockResolvedValue([{ id: 'l1', name: 'Wash' }]);
    mapperMock.toDto.mockReturnValue({ id: 'l1', name: 'Wash' });

    await expect(service.list({ filter: {} } as any)).resolves.toEqual([{ id: 'l1', name: 'Wash' }]);
  });
});

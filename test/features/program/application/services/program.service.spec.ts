import { ProgramService } from '@features/program/application/services/program.service';

describe('ProgramService', () => {
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

  let service: ProgramService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new ProgramService(repoMock as any, mapperMock as any);
  });

  it('inherits CRUD logic from AbstractService (edit)', async () => {
    mapperMock.fromEditDto.mockReturnValue({ label: 'New' });
    repoMock.update.mockResolvedValue({ id: 'p1', label: 'New' });
    mapperMock.toDto.mockReturnValue({ id: 'p1', label: 'New' });

    await expect(service.edit('p1', { label: 'New' } as any)).resolves.toEqual({ id: 'p1', label: 'New' });
  });
});

import { NotFoundException } from '@nestjs/common';
import { AbstractService } from '@shared/application/services/abstract.service';

describe('AbstractService', () => {
  type Entity = { id: string; value: string };
  type Dto = { id: string; value: string };

  class TestService extends AbstractService<Entity, string, Dto, any, any, any> {
    constructor(repo: any, mapper: any) {
      super(repo, mapper);
    }
  }

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

  let service: TestService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new TestService(repoMock as any, mapperMock as any);
  });

  it('getById should return mapped dto when entity exists', async () => {
    const entity = { id: '1', value: 'raw' };
    const dto = { id: '1', value: 'mapped' };

    repoMock.findById.mockResolvedValue(entity);
    mapperMock.toDto.mockReturnValue(dto);

    await expect(service.getById('1')).resolves.toEqual(dto);
    expect(repoMock.findById).toHaveBeenCalledWith('1');
    expect(mapperMock.toDto).toHaveBeenCalledWith(entity);
  });

  it('getById should throw NotFoundException when entity does not exist', async () => {
    repoMock.findById.mockResolvedValue(null);

    await expect(service.getById('missing')).rejects.toBeInstanceOf(NotFoundException);
  });

  it('list should map all entities to dto', async () => {
    const params = { filter: { q: 'x' } };
    const entities = [
      { id: '1', value: 'a' },
      { id: '2', value: 'b' },
    ];

    repoMock.findMany.mockResolvedValue(entities);
    mapperMock.toDto.mockImplementation((e: Entity) => ({ ...e, value: `dto-${e.value}` }));

    await expect(service.list(params as any)).resolves.toEqual([
      { id: '1', value: 'dto-a' },
      { id: '2', value: 'dto-b' },
    ]);
    expect(repoMock.findMany).toHaveBeenCalledWith(params);
  });

  it('create should map create dto before repo call and return mapped result', async () => {
    const createDto = { value: 'to-create' };
    const repoData = { value: 'repo-data' };
    const created = { id: '1', value: 'created' };
    const dto = { id: '1', value: 'mapped-created' };

    mapperMock.fromCreateDto.mockReturnValue(repoData);
    repoMock.create.mockResolvedValue(created);
    mapperMock.toDto.mockReturnValue(dto);

    await expect(service.create(createDto as any)).resolves.toEqual(dto);
    expect(mapperMock.fromCreateDto).toHaveBeenCalledWith(createDto);
    expect(repoMock.create).toHaveBeenCalledWith(repoData);
  });

  it('edit should map edit dto before repo call and return mapped result', async () => {
    const editDto = { value: 'to-edit' };
    const repoData = { value: 'repo-edit-data' };
    const updated = { id: '1', value: 'updated' };
    const dto = { id: '1', value: 'mapped-updated' };

    mapperMock.fromEditDto.mockReturnValue(repoData);
    repoMock.update.mockResolvedValue(updated);
    mapperMock.toDto.mockReturnValue(dto);

    await expect(service.edit('1', editDto as any)).resolves.toEqual(dto);
    expect(mapperMock.fromEditDto).toHaveBeenCalledWith(editDto);
    expect(repoMock.update).toHaveBeenCalledWith('1', repoData);
  });

  it('remove should forward to repo.delete', async () => {
    repoMock.delete.mockResolvedValue(undefined);

    await expect(service.remove('1')).resolves.toBeUndefined();
    expect(repoMock.delete).toHaveBeenCalledWith('1');
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PersonController } from '../../../src/features/person/interface/http/person.controller';
import { PersonService } from '../../../src/features/person/application/services/person.service';

describe('PersonController', () => {
  let controller: PersonController;

  const serviceMock = {
    getById: jest.fn(),
    list: jest.fn(),
    create: jest.fn(),
    edit: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [
        {
          provide: PersonService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = moduleRef.get(PersonController);
  });

  it('getById should call service.getById', async () => {
    const id = 'person-1';
    const expected = { id, firstName: 'John' };

    serviceMock.getById.mockResolvedValue(expected);

    await expect(controller.getById(id)).resolves.toEqual(expected as any);
    expect(serviceMock.getById).toHaveBeenCalledWith(id);
  });

  it('list should call service.list with wrapped filter', async () => {
    const filter = { firstName: 'John' } as any;
    const expected = [{ id: 'person-1' }];

    serviceMock.list.mockResolvedValue(expected);

    await expect(controller.list(filter)).resolves.toEqual(expected as any);
    expect(serviceMock.list).toHaveBeenCalledWith({ filter });
  });

  it('create should call service.create', async () => {
    const dto = { firstName: 'John', lastName: 'Doe' } as any;
    const expected = { id: 'person-1', firstName: 'John', lastName: 'Doe' };

    serviceMock.create.mockResolvedValue(expected);

    await expect(controller.create(dto)).resolves.toEqual(expected as any);
    expect(serviceMock.create).toHaveBeenCalledWith(dto);
  });

  it('edit should call service.edit', async () => {
    const id = 'person-1';
    const dto = { firstName: 'Johnny' } as any;
    const expected = { id, firstName: 'Johnny' };

    serviceMock.edit.mockResolvedValue(expected);

    await expect(controller.edit(id, dto)).resolves.toEqual(expected as any);
    expect(serviceMock.edit).toHaveBeenCalledWith(id, dto);
  });

  it('remove should call service.remove', async () => {
    const id = 'person-1';

    serviceMock.remove.mockResolvedValue(undefined);

    await expect(controller.remove(id)).resolves.toBeUndefined();
    expect(serviceMock.remove).toHaveBeenCalledWith(id);
  });
});

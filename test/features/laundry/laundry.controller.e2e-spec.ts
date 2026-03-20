import { Test, TestingModule } from '@nestjs/testing';
import { LaundryController } from '../../../src/features/laundry/interface/http/laundry.controller';
import { LaundryService } from '../../../src/features/laundry/application/services/laundry.service';

describe('LaundryController', () => {
  let controller: LaundryController;

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
      controllers: [LaundryController],
      providers: [
        {
          provide: LaundryService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = moduleRef.get(LaundryController);
  });

  it('getById should call service.getById', async () => {
    const id = 'laundry-1';
    const expected = { id, name: 'Center Wash' };

    serviceMock.getById.mockResolvedValue(expected);

    await expect(controller.getById(id)).resolves.toEqual(expected as any);
    expect(serviceMock.getById).toHaveBeenCalledWith(id);
  });

  it('list should call service.list with wrapped filter', async () => {
    const filter = { name: 'Center' } as any;
    const expected = [{ id: 'laundry-1' }];

    serviceMock.list.mockResolvedValue(expected);

    await expect(controller.list(filter)).resolves.toEqual(expected as any);
    expect(serviceMock.list).toHaveBeenCalledWith({ filter });
  });

  it('create should call service.create', async () => {
    const dto = { name: 'Center Wash' } as any;
    const expected = { id: 'laundry-1', name: 'Center Wash' };

    serviceMock.create.mockResolvedValue(expected);

    await expect(controller.create(dto)).resolves.toEqual(expected as any);
    expect(serviceMock.create).toHaveBeenCalledWith(dto);
  });

  it('edit should call service.edit', async () => {
    const id = 'laundry-1';
    const dto = { name: 'Center Wash 2' } as any;
    const expected = { id, name: 'Center Wash 2' };

    serviceMock.edit.mockResolvedValue(expected);

    await expect(controller.edit(id, dto)).resolves.toEqual(expected as any);
    expect(serviceMock.edit).toHaveBeenCalledWith(id, dto);
  });

  it('remove should call service.remove', async () => {
    const id = 'laundry-1';

    serviceMock.remove.mockResolvedValue(undefined);

    await expect(controller.remove(id)).resolves.toBeUndefined();
    expect(serviceMock.remove).toHaveBeenCalledWith(id);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../../../src/features/user/interface/http/user.controller';
import { UserService } from '../../../src/features/user/application/services/user.service';

describe('UserController', () => {
  let controller: UserController;

  const serviceMock = {
    getById: jest.fn(),
    list: jest.fn(),
    edit: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = moduleRef.get(UserController);
  });

  it('getById should call service.getById', async () => {
    const id = 'user-1';
    const expected = { id, email: 'user@example.com' };

    serviceMock.getById.mockResolvedValue(expected);

    await expect(controller.getById(id)).resolves.toEqual(expected as any);
    expect(serviceMock.getById).toHaveBeenCalledWith(id);
  });

  it('list should call service.list with wrapped filter', async () => {
    const filter = { email: 'user@example.com' } as any;
    const expected = [{ id: 'user-1' }];

    serviceMock.list.mockResolvedValue(expected);

    await expect(controller.list(filter)).resolves.toEqual(expected as any);
    expect(serviceMock.list).toHaveBeenCalledWith({ filter });
  });

  it('edit should call service.edit', async () => {
    const id = 'user-1';
    const dto = { email: 'new@example.com' } as any;
    const expected = { id, email: 'new@example.com' };

    serviceMock.edit.mockResolvedValue(expected);

    await expect(controller.edit(id, dto)).resolves.toEqual(expected as any);
    expect(serviceMock.edit).toHaveBeenCalledWith(id, dto);
  });

  it('remove should call service.remove', async () => {
    const id = 'user-1';

    serviceMock.remove.mockResolvedValue(undefined);

    await expect(controller.remove(id)).resolves.toBeUndefined();
    expect(serviceMock.remove).toHaveBeenCalledWith(id);
  });
});

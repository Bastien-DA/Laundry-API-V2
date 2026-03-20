import { Test, TestingModule } from '@nestjs/testing';
import { ProgramController } from '../../../src/features/program/interface/http/program.controller';
import { ProgramService } from '../../../src/features/program/application/services/program.service';

describe('ProgramController', () => {
  let controller: ProgramController;

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
      controllers: [ProgramController],
      providers: [
        {
          provide: ProgramService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = moduleRef.get(ProgramController);
  });

  it('getById should call service.getById', async () => {
    const id = 'program-1';
    const expected = { id, label: 'Express' };

    serviceMock.getById.mockResolvedValue(expected);

    await expect(controller.getById(id)).resolves.toEqual(expected as any);
    expect(serviceMock.getById).toHaveBeenCalledWith(id);
  });

  it('list should call service.list with wrapped filter', async () => {
    const filter = { label: 'Express' } as any;
    const expected = [{ id: 'program-1' }];

    serviceMock.list.mockResolvedValue(expected);

    await expect(controller.list(filter)).resolves.toEqual(expected as any);
    expect(serviceMock.list).toHaveBeenCalledWith({ filter });
  });

  it('create should call service.create', async () => {
    const dto = { label: 'Express' } as any;
    const expected = { id: 'program-1', label: 'Express' };

    serviceMock.create.mockResolvedValue(expected);

    await expect(controller.create(dto)).resolves.toEqual(expected as any);
    expect(serviceMock.create).toHaveBeenCalledWith(dto);
  });

  it('edit should call service.edit', async () => {
    const id = 'program-1';
    const dto = { label: 'Express+' } as any;
    const expected = { id, label: 'Express+' };

    serviceMock.edit.mockResolvedValue(expected);

    await expect(controller.edit(id, dto)).resolves.toEqual(expected as any);
    expect(serviceMock.edit).toHaveBeenCalledWith(id, dto);
  });

  it('remove should call service.remove', async () => {
    const id = 'program-1';

    serviceMock.remove.mockResolvedValue(undefined);

    await expect(controller.remove(id)).resolves.toBeUndefined();
    expect(serviceMock.remove).toHaveBeenCalledWith(id);
  });
});

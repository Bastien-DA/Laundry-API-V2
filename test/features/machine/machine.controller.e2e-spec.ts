import { Test, TestingModule } from '@nestjs/testing';
import { MachineController } from '../../../src/features/machine/interface/http/machine.controller';
import { MachineService } from '../../../src/features/machine/application/services/machine.service';

describe('MachineController', () => {
  let controller: MachineController;

  const serviceMock = {
    getById: jest.fn(),
    list: jest.fn(),
    create: jest.fn(),
    edit: jest.fn(),
    remove: jest.fn(),
    startProgram: jest.fn(),
    pauseProgram: jest.fn(),
    resumeProgram: jest.fn(),
    stopProgram: jest.fn(),
    setOutOfOrder: jest.fn(),
    markAvailable: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [MachineController],
      providers: [
        {
          provide: MachineService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = moduleRef.get(MachineController);
  });

  it('getById should call service.getById', async () => {
    const id = 'machine-1';
    const expected = { id, label: 'M-1' };

    serviceMock.getById.mockResolvedValue(expected);

    await expect(controller.getById(id)).resolves.toEqual(expected as any);
    expect(serviceMock.getById).toHaveBeenCalledWith(id);
  });

  it('list should call service.list with wrapped filter', async () => {
    const filter = { laundryId: 'laundry-1' } as any;
    const expected = [{ id: 'machine-1' }];

    serviceMock.list.mockResolvedValue(expected);

    await expect(controller.list(filter)).resolves.toEqual(expected as any);
    expect(serviceMock.list).toHaveBeenCalledWith({ filter });
  });

  it('create should call service.create', async () => {
    const dto = { label: 'M-1' } as any;
    const expected = { id: 'machine-1', label: 'M-1' };

    serviceMock.create.mockResolvedValue(expected);

    await expect(controller.create(dto)).resolves.toEqual(expected as any);
    expect(serviceMock.create).toHaveBeenCalledWith(dto);
  });

  it('edit should call service.edit', async () => {
    const id = 'machine-1';
    const dto = { label: 'M-1-updated' } as any;
    const expected = { id, label: 'M-1-updated' };

    serviceMock.edit.mockResolvedValue(expected);

    await expect(controller.edit(id, dto)).resolves.toEqual(expected as any);
    expect(serviceMock.edit).toHaveBeenCalledWith(id, dto);
  });

  it('remove should call service.remove', async () => {
    const id = 'machine-1';

    serviceMock.remove.mockResolvedValue(undefined);

    await expect(controller.remove(id)).resolves.toBeUndefined();
    expect(serviceMock.remove).toHaveBeenCalledWith(id);
  });

  it('start should call service.startProgram with personId from req.user.user.personId', async () => {
    const req = {
      user: {
        user: {
          personId: 'person-1',
        },
      },
    };

    serviceMock.startProgram.mockResolvedValue(undefined);

    await expect(controller.start(req, 'machine-1', 'program-1')).resolves.toBeUndefined();
    expect(serviceMock.startProgram).toHaveBeenCalledWith('machine-1', 'program-1', 'person-1');
  });

  it('pause should call service.pauseProgram', async () => {
    serviceMock.pauseProgram.mockResolvedValue(undefined);

    await expect(controller.pause('machine-1')).resolves.toBeUndefined();
    expect(serviceMock.pauseProgram).toHaveBeenCalledWith('machine-1');
  });

  it('resume should call service.resumeProgram', async () => {
    serviceMock.resumeProgram.mockResolvedValue(undefined);

    await expect(controller.resume('machine-1')).resolves.toBeUndefined();
    expect(serviceMock.resumeProgram).toHaveBeenCalledWith('machine-1');
  });

  it('stop should call service.stopProgram', async () => {
    serviceMock.stopProgram.mockResolvedValue(undefined);

    await expect(controller.stop('machine-1')).resolves.toBeUndefined();
    expect(serviceMock.stopProgram).toHaveBeenCalledWith('machine-1');
  });

  it('outOfOrder should call service.setOutOfOrder', async () => {
    serviceMock.setOutOfOrder.mockResolvedValue(undefined);

    await expect(controller.outOfOrder('machine-1')).resolves.toBeUndefined();
    expect(serviceMock.setOutOfOrder).toHaveBeenCalledWith('machine-1');
  });

  it('available should call service.markAvailable', async () => {
    serviceMock.markAvailable.mockResolvedValue(undefined);

    await expect(controller.available('machine-1')).resolves.toBeUndefined();
    expect(serviceMock.markAvailable).toHaveBeenCalledWith('machine-1');
  });
});

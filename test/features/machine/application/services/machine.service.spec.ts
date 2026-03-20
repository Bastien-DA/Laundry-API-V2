import { BadRequestException } from '@nestjs/common';
import { MachineStatusEnum } from '@prisma/client';
import { MachineService } from '@features/machine/application/services/machine.service';

describe('MachineService', () => {
  const repoMock = {};
  const mapperMock = {};

  const prismaMock = {
    $transaction: jest.fn(),
    machineStatus: {
      findUnique: jest.fn(),
      update: jest.fn(),
      create: jest.fn(),
    },
  };

  let service: MachineService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new MachineService(repoMock as any, mapperMock as any, prismaMock as any);
  });

  it('startProgram should throw when machine does not exist', async () => {
    prismaMock.$transaction.mockImplementation(async (callback: any) => {
      const tx = {
        machine: { findUnique: jest.fn().mockResolvedValue(null), update: jest.fn() },
        machineStatus: { create: jest.fn(), update: jest.fn() },
      };
      return callback(tx);
    });

    await expect(service.startProgram('m1', 'p1', 'person1')).rejects.toBeInstanceOf(BadRequestException);
  });

  it('startProgram should throw when program is not allowed', async () => {
    prismaMock.$transaction.mockImplementation(async (callback: any) => {
      const tx = {
        machine: {
          findUnique: jest.fn().mockResolvedValue({
            machineStatus: { status: MachineStatusEnum.AVAILABLE },
            programs: [{ id: 'other-program' }],
          }),
          update: jest.fn(),
        },
        machineStatus: { create: jest.fn(), update: jest.fn() },
      };
      return callback(tx);
    });

    await expect(service.startProgram('m1', 'target-program', 'person1')).rejects.toBeInstanceOf(
      BadRequestException,
    );
  });

  it('startProgram should throw when machine is out of order', async () => {
    prismaMock.$transaction.mockImplementation(async (callback: any) => {
      const tx = {
        machine: {
          findUnique: jest.fn().mockResolvedValue({
            machineStatus: { status: MachineStatusEnum.OUT_OF_ORDER },
            programs: [{ id: 'program-1' }],
          }),
          update: jest.fn(),
        },
        machineStatus: { create: jest.fn(), update: jest.fn() },
      };
      return callback(tx);
    });

    await expect(service.startProgram('m1', 'program-1', 'person1')).rejects.toBeInstanceOf(
      BadRequestException,
    );
  });

  it('startProgram should create status when machine has no status', async () => {
    const machineUpdate = jest.fn();
    const statusCreate = jest.fn();

    prismaMock.$transaction.mockImplementation(async (callback: any) => {
      const tx = {
        machine: {
          findUnique: jest.fn().mockResolvedValue({
            id: 'm1',
            machineStatus: null,
            programs: [{ id: 'program-1' }],
          }),
          update: machineUpdate,
        },
        machineStatus: { create: statusCreate, update: jest.fn() },
      };
      return callback(tx);
    });

    await expect(service.startProgram('m1', 'program-1', 'person1')).resolves.toBeUndefined();
    expect(machineUpdate).toHaveBeenCalledWith({
      where: { id: 'm1' },
      data: { person: { connect: { id: 'person1' } } },
    });
    expect(statusCreate).toHaveBeenCalledWith({
      data: {
        machine: { connect: { id: 'm1' } },
        status: MachineStatusEnum.RUNNING,
        currentProgram: { connect: { id: 'program-1' } },
      },
    });
  });

  it('startProgram should update status when machine already has status', async () => {
    const statusUpdate = jest.fn();

    prismaMock.$transaction.mockImplementation(async (callback: any) => {
      const tx = {
        machine: {
          findUnique: jest.fn().mockResolvedValue({
            id: 'm1',
            machineStatus: { status: MachineStatusEnum.PAUSED },
            programs: [{ id: 'program-1' }],
          }),
          update: jest.fn(),
        },
        machineStatus: { create: jest.fn(), update: statusUpdate },
      };
      return callback(tx);
    });

    await expect(service.startProgram('m1', 'program-1', 'person1')).resolves.toBeUndefined();
    expect(statusUpdate).toHaveBeenCalledWith({
      where: { machineId: 'm1' },
      data: {
        status: MachineStatusEnum.RUNNING,
        currentProgram: { connect: { id: 'program-1' } },
      },
    });
  });

  it('pauseProgram should update status from RUNNING to PAUSED', async () => {
    prismaMock.machineStatus.findUnique.mockResolvedValue({ status: MachineStatusEnum.RUNNING });
    prismaMock.machineStatus.update.mockResolvedValue({});

    await expect(service.pauseProgram('m1')).resolves.toBeUndefined();
    expect(prismaMock.machineStatus.update).toHaveBeenCalledWith({
      where: { machineId: 'm1' },
      data: { status: MachineStatusEnum.PAUSED },
    });
  });

  it('resumeProgram should throw on invalid transition', async () => {
    prismaMock.machineStatus.findUnique.mockResolvedValue({ status: MachineStatusEnum.AVAILABLE });

    await expect(service.resumeProgram('m1')).rejects.toBeInstanceOf(BadRequestException);
  });

  it('stopProgram should set machine available and disconnect current program', async () => {
    prismaMock.machineStatus.update.mockResolvedValue({});

    await expect(service.stopProgram('m1')).resolves.toBeUndefined();
    expect(prismaMock.machineStatus.update).toHaveBeenCalledWith({
      where: { machineId: 'm1' },
      data: {
        status: MachineStatusEnum.AVAILABLE,
        currentProgram: { disconnect: true },
      },
    });
  });

  it('setOutOfOrder should create status when missing', async () => {
    prismaMock.machineStatus.findUnique.mockResolvedValue(null);
    prismaMock.machineStatus.create.mockResolvedValue({});

    await expect(service.setOutOfOrder('m1')).resolves.toBeUndefined();
    expect(prismaMock.machineStatus.create).toHaveBeenCalledWith({
      data: {
        machine: { connect: { id: 'm1' } },
        status: MachineStatusEnum.OUT_OF_ORDER,
      },
    });
  });

  it('markAvailable should move status from OUT_OF_ORDER to AVAILABLE', async () => {
    prismaMock.machineStatus.findUnique.mockResolvedValue({ status: MachineStatusEnum.OUT_OF_ORDER });
    prismaMock.machineStatus.update.mockResolvedValue({});

    await expect(service.markAvailable('m1')).resolves.toBeUndefined();
    expect(prismaMock.machineStatus.update).toHaveBeenCalledWith({
      where: { machineId: 'm1' },
      data: { status: MachineStatusEnum.AVAILABLE },
    });
  });
});

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../core/database/prisma.service';
import { Machine } from '@prisma/client';

@Injectable()
export class MachinesRepository {
  constructor(private readonly prisma: PrismaService) {}

  getAllMachinesOfALaundry(laundryId: string): Promise<Array<Machine>> {
    return this.prisma.machine.findMany({ where: { laundryId: laundryId } });
  }

  getOneMachine(machineId: string): Promise<Machine> {
      return this.prisma.machine.findUniqueOrThrow({ where: { id: machineId } });
  }
}

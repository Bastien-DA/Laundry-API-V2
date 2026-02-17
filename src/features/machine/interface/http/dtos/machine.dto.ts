import { MachineType, MachineStatusEnum } from '@prisma/client';

export class MachineDto {
    id!: string;
    name!: string;
    type!: MachineType;
    price!: string;

    laundryId!: string;
    personId!: string | null;

    machineStatusId!: string | null;
    status!: MachineStatusEnum | null;
    currentProgramId!: string | null;

    programIds!: string[];
}

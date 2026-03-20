import { MachineType, MachineStatusEnum } from '@prisma/client';
export declare class MachineEntity {
    readonly id: string;
    name: string;
    type: MachineType;
    price: string;
    laundryId: string;
    personId: string | null;
    machineStatusId: string | null;
    status: MachineStatusEnum | null;
    currentProgramId: string | null;
    programIds: string[];
    constructor(id: string, name: string, type: MachineType, price: string, laundryId: string, personId: string | null, machineStatusId: string | null, status: MachineStatusEnum | null, currentProgramId: string | null, programIds: string[]);
}

import { MachineType, MachineStatusEnum } from '@prisma/client';

export class MachineEntity {
    constructor(
        public readonly id: string,
        public name: string,
        public type: MachineType,
        public price: string, // Decimal -> string

        public laundryId: string,
        public personId: string | null,

        // Status (1-1)
        public machineStatusId: string | null,
        public status: MachineStatusEnum | null,
        public currentProgramId: string | null,

        // Programs (N-N)
        public programIds: string[],
    ) {}
}

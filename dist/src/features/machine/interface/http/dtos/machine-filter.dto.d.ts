import { MachineType } from '@prisma/client';
export declare class MachineFilterDto {
    laundryId?: string;
    personId?: string;
    type?: MachineType;
    programId?: string;
}

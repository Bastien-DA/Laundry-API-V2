import { MachineType } from '@prisma/client';
export declare class CreateMachineDto {
    name: string;
    type: MachineType;
    price: string;
    laundryId: string;
    personId?: string | null;
    programIds?: string[];
}

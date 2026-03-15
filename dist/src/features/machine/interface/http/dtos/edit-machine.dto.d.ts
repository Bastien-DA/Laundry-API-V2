import { MachineType } from '@prisma/client';
export declare class EditMachineDto {
    name?: string;
    type?: MachineType;
    price?: string;
    personId?: string | null;
    programIds?: string[];
}

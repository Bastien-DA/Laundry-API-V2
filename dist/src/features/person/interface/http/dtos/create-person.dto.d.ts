import { PersonType } from '@prisma/client';
export declare class CreatePersonDto {
    username: string;
    personType: PersonType;
    laundryIds?: string[];
    machineIds?: string[];
    userId?: string;
}

import { PersonType } from '@prisma/client';
export declare class PersonDto {
    id: string;
    username: string;
    personType: PersonType;
    laundryIds: string[];
    machineIds: string[];
    userId: string | null;
}

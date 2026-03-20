import { PersonType } from "@prisma/client";
export declare class PersonEntity {
    readonly id: string;
    username: string;
    personType: PersonType;
    laundryIds: string[];
    machineIds: string[];
    userId: string | null;
    constructor(id: string, username: string, personType: PersonType, laundryIds: string[], machineIds: string[], userId: string | null);
}

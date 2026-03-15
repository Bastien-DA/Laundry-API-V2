import { PersonType } from "@prisma/client";
export declare class EditPersonDto {
    username?: string;
    personType: PersonType;
    laundryIds?: string[];
    machineIds?: string[];
    userId?: string | null;
}

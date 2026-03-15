import { PersonType } from "@prisma/client";
export declare class PersonFilterDto {
    usernameContains?: string;
    personType?: PersonType;
    laundryId?: string;
    machineId?: string;
    hasUser?: boolean;
    userId?: string;
}

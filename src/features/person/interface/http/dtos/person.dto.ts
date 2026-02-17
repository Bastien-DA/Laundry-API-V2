import {IsEnum} from "class-validator";
import {PersonType} from "@prisma/client";

export class PersonDto {
    id!: string;
    username!: string;

    personType!: PersonType;

    laundryIds!: string[];
    machineIds!: string[];

    userId!: string | null; // ✅ 0..1
}

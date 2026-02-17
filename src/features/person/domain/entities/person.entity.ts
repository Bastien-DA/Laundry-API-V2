import {PersonType} from "@prisma/client";

export class PersonEntity {
    constructor(
        public readonly id: string,
        public username: string,
        public personType: PersonType,
        public laundryIds: string[],
        public machineIds: string[],
        public userId: string | null, // ✅ 0..1
    ) {}
}

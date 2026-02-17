export class LaundryEntity {
    constructor(
        public readonly id: string,
        public name: string,
        public hours: string,
        public address: string,

        // ✅ Decimal Prisma -> on stocke en string côté domaine (stable)
        public latitude: string,
        public longitude: string,

        public createdAt: Date,

        // ✅ relations IDs only
        public personId: string,
        public machineIds: string[],
    ) {}
}

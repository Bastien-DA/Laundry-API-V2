import { PrismaLaundryRepository } from '@features/laundry/infrastructure/prisma/laundry.prisma-repository';
import { LaundryMapper } from '@features/laundry/application/mappers/laundry.mapper';
export declare const laundryProviders: (typeof LaundryMapper | {
    provide: string;
    useClass: typeof PrismaLaundryRepository;
})[];

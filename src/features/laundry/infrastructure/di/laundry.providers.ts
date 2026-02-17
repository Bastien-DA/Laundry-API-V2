import { PrismaLaundryRepository } from '@features/laundry/infrastructure/prisma/laundry.prisma-repository';
import { LaundryMapper } from '@features/laundry/application/mappers/laundry.mapper';

export const laundryProviders = [
    {
        provide: 'LaundryRepository',
        useClass: PrismaLaundryRepository,
    },
    LaundryMapper
];

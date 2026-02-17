import { PrismaPersonRepository } from '@features/person/infrastructure/prisma/person.prisma-repository';
import { PersonMapper } from '@features/person/application/mappers/person.mapper';

export const personProviders = [
    {
        provide: 'PersonRepository',
        useClass: PrismaPersonRepository
    },
    PersonMapper];

import { PrismaPersonRepository } from '@features/person/infrastructure/prisma/person.prisma-repository';
import { PersonMapper } from '@features/person/application/mappers/person.mapper';
export declare const personProviders: (typeof PersonMapper | {
    provide: string;
    useClass: typeof PrismaPersonRepository;
})[];

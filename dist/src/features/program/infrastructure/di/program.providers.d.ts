import { PrismaProgramRepository } from '@features/program/infrastructure/prisma/program.prisma-repository';
import { ProgramMapper } from '@features/program/application/mappers/program.mapper';
export declare const programProviders: (typeof ProgramMapper | {
    provide: string;
    useClass: typeof PrismaProgramRepository;
})[];

import { PrismaProgramRepository } from '@features/program/infrastructure/prisma/program.prisma-repository';
import { ProgramMapper } from '@features/program/application/mappers/program.mapper';

export const programProviders = [
    { provide: 'ProgramRepository', useClass: PrismaProgramRepository },
    ProgramMapper,
];

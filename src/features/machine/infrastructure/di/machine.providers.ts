import { PrismaMachineRepository } from '@features/machine/infrastructure/prisma/machine.prisma-repository';
import { MachineMapper } from '@features/machine/application/mappers/machine.mapper';

export const machineProviders = [
    { provide: 'MachineRepository', useClass: PrismaMachineRepository },
    MachineMapper,
];

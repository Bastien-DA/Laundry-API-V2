import { PrismaMachineRepository } from '@features/machine/infrastructure/prisma/machine.prisma-repository';
import { MachineMapper } from '@features/machine/application/mappers/machine.mapper';
export declare const machineProviders: (typeof MachineMapper | {
    provide: string;
    useClass: typeof PrismaMachineRepository;
})[];

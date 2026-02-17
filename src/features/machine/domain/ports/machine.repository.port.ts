import { AbstractRepository } from '@shared/domain/ports/abstract.repository';
import { ListParams } from '@shared/application/types/list-params';
import { MachineEntity } from '@features/machine/domain/entities/machine.entity';
import { MachineType } from '@prisma/client';

export type MachineFilter = {
    laundryId?: string;
    personId?: string;
    type?: MachineType;
    programId?: string;
};

export type CreateMachineCommand = {
    name: string;
    type: MachineType;
    price: string;

    laundryId: string;
    personId?: string | null;

    programIds?: string[];
};

export type EditMachineCommand = {
    name?: string;
    type?: MachineType;
    price?: string;

    personId?: string | null;
    programIds?: string[];
};

export abstract class MachineRepository extends AbstractRepository<
    MachineEntity,
    string,
    CreateMachineCommand,
    EditMachineCommand,
    MachineFilter
> {
    abstract findMany(params?: ListParams<MachineFilter>): Promise<MachineEntity[]>;
}

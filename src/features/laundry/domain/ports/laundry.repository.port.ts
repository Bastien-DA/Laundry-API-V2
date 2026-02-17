import { AbstractRepository } from '@shared/domain/ports/abstract.repository';
import { ListParams } from '@shared/application/types/list-params';
import { LaundryEntity } from '@features/laundry/domain/entities/laundry.entity';

export type LaundryFilter = {
    nameContains?: string;
    personId?: string;
    machineId?: string;
};

export type CreateLaundryCommand = {
    name: string;
    hours: string;
    address: string;
    latitude: string;  // decimal string
    longitude: string; // decimal string
    personId: string;

    machineIds?: string[]; // optionnel si tu veux connecter des machines à la création
};

export type EditLaundryCommand = {
    name?: string;
    hours?: string;
    address?: string;
    latitude?: string;
    longitude?: string;

    personId?: string;     // si tu veux autoriser changement de propriétaire
    machineIds?: string[]; // si défini => set
};

export abstract class LaundryRepository extends AbstractRepository<
    LaundryEntity,
    string,
    CreateLaundryCommand,
    EditLaundryCommand,
    LaundryFilter
> {
    abstract findMany(params?: ListParams<LaundryFilter>): Promise<LaundryEntity[]>;
}

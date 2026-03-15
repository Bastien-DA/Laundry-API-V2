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
    latitude: string;
    longitude: string;
    personId: string;
    machineIds?: string[];
};
export type EditLaundryCommand = {
    name?: string;
    hours?: string;
    address?: string;
    latitude?: string;
    longitude?: string;
    personId?: string;
    machineIds?: string[];
};
export declare abstract class LaundryRepository extends AbstractRepository<LaundryEntity, string, CreateLaundryCommand, EditLaundryCommand, LaundryFilter> {
    abstract findMany(params?: ListParams<LaundryFilter>): Promise<LaundryEntity[]>;
}

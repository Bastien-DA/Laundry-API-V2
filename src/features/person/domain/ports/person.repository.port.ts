import { AbstractRepository } from '@shared/domain/ports/abstract.repository';
import { ListParams } from '@shared/application/types/list-params';
import { PersonEntity } from '@features/person/domain/entities/person.entity';
import {PersonType} from "@prisma/client";

export type PersonFilter = {
    usernameContains?: string;
    personType?: PersonType;

    laundryId?: string;
    machineId?: string;

    hasUser?: boolean;
    userId?: string;
};

export type CreatePersonCommand = {
    username: string;
    personType: PersonType;

    laundryIds?: string[];
    machineIds?: string[];
    userId?: string | null; // ✅ 0..1
};

export type EditPersonCommand = {
    username?: string;
    personType?: PersonType;

    laundryIds?: string[];
    machineIds?: string[];
    userId?: string | null; // undefined=no change, null=disconnect, string=connect
};

export abstract class PersonRepository extends AbstractRepository<
    PersonEntity,
    string,
    CreatePersonCommand,
    EditPersonCommand,
    PersonFilter
> {
    abstract findMany(params?: ListParams<PersonFilter>): Promise<PersonEntity[]>;
}

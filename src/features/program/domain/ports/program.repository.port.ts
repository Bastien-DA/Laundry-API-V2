import { AbstractRepository } from '@shared/domain/ports/abstract.repository';
import { ListParams } from '@shared/application/types/list-params';
import { ProgramEntity } from '@features/program/domain/entities/program.entity';

export type ProgramFilter = {
    nameContains?: string;
    machineId?: string;
};

export type CreateProgramCommand = {
    name: string;
    temperature: number;
    speed: number;
    duration: number;

    machineIds?: string[];
};

export type EditProgramCommand = {
    name?: string;
    temperature?: number;
    speed?: number;
    duration?: number;

    machineIds?: string[];
};

export abstract class ProgramRepository extends AbstractRepository<
    ProgramEntity,
    string,
    CreateProgramCommand,
    EditProgramCommand,
    ProgramFilter
> {
    abstract findMany(params?: ListParams<ProgramFilter>): Promise<ProgramEntity[]>;
}

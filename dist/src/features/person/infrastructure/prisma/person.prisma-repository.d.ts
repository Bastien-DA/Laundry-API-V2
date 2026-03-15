import { PrismaService } from '@core/database/prisma.service';
import { PersonEntity } from '@features/person/domain/entities/person.entity';
import { CreatePersonCommand, EditPersonCommand, PersonFilter, PersonRepository } from '@features/person/domain/ports/person.repository.port';
type Sort = {
    field: 'username' | 'personType' | 'id';
    direction: 'asc' | 'desc';
};
export declare class PrismaPersonRepository implements PersonRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toEntity;
    private buildWhere;
    private buildOrderBy;
    findById(id: string): Promise<PersonEntity | null>;
    findMany(params?: {
        filter?: PersonFilter;
        sort?: Sort;
    }): Promise<PersonEntity[]>;
    create(cmd: CreatePersonCommand): Promise<PersonEntity>;
    update(id: string, cmd: EditPersonCommand): Promise<PersonEntity>;
    delete(id: string): Promise<void>;
}
export {};

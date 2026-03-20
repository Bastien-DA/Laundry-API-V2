import { PrismaService } from '@core/database/prisma.service';
import { ProgramEntity } from '@features/program/domain/entities/program.entity';
import { CreateProgramCommand, EditProgramCommand, ProgramFilter, ProgramRepository } from '@features/program/domain/ports/program.repository.port';
type Sort = {
    field: 'name' | 'duration';
    direction: 'asc' | 'desc';
};
export declare class PrismaProgramRepository implements ProgramRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toEntity;
    private buildWhere;
    private buildOrderBy;
    findById(id: string): Promise<ProgramEntity | null>;
    findMany(params?: {
        filter?: ProgramFilter;
        sort?: Sort;
    }): Promise<ProgramEntity[]>;
    create(cmd: CreateProgramCommand): Promise<ProgramEntity>;
    update(id: string, cmd: EditProgramCommand): Promise<ProgramEntity>;
    delete(id: string): Promise<void>;
}
export {};

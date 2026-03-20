import { PrismaService } from '@core/database/prisma.service';
import { LaundryEntity } from '@features/laundry/domain/entities/laundry.entity';
import { CreateLaundryCommand, EditLaundryCommand, LaundryFilter, LaundryRepository } from '@features/laundry/domain/ports/laundry.repository.port';
type Sort = {
    field: 'createdAt' | 'name';
    direction: 'asc' | 'desc';
};
export declare class PrismaLaundryRepository implements LaundryRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toEntity;
    private buildWhere;
    private buildOrderBy;
    findById(id: string): Promise<LaundryEntity | null>;
    findMany(params?: {
        filter?: LaundryFilter;
        sort?: Sort;
    }): Promise<LaundryEntity[]>;
    create(cmd: CreateLaundryCommand): Promise<LaundryEntity>;
    update(id: string, cmd: EditLaundryCommand): Promise<LaundryEntity>;
    delete(id: string): Promise<void>;
}
export {};

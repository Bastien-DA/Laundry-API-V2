import { PrismaService } from '@core/database/prisma.service';
import { MachineEntity } from '@features/machine/domain/entities/machine.entity';
import { CreateMachineCommand, EditMachineCommand, MachineFilter, MachineRepository } from '@features/machine/domain/ports/machine.repository.port';
type Sort = {
    field: 'name' | 'price';
    direction: 'asc' | 'desc';
};
export declare class PrismaMachineRepository implements MachineRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toEntity;
    private buildWhere;
    private buildOrderBy;
    findById(id: string): Promise<MachineEntity | null>;
    findMany(params?: {
        filter?: MachineFilter;
        sort?: Sort;
    }): Promise<MachineEntity[]>;
    create(cmd: CreateMachineCommand): Promise<MachineEntity>;
    update(id: string, cmd: EditMachineCommand): Promise<MachineEntity>;
    delete(id: string): Promise<void>;
}
export {};

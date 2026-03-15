import { PrismaService } from '@core/database/prisma.service';
import { UserEntity } from '@features/user/domain/entities/user.entity';
import { CreateUserCommand, EditUserCommand, UserFilter, UserRepository } from '@features/user/domain/ports/user.repository.port';
type Sort = {
    field: 'createdAt' | 'email';
    direction: 'asc' | 'desc';
};
export declare class PrismaUserRepository implements UserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toEntity;
    private buildWhere;
    private buildOrderBy;
    findById(id: string): Promise<UserEntity | null>;
    findMany(params?: {
        filter?: UserFilter;
        sort?: Sort;
    }): Promise<UserEntity[]>;
    create(cmd: CreateUserCommand): Promise<UserEntity>;
    update(id: string, cmd: EditUserCommand): Promise<UserEntity>;
    delete(id: string): Promise<void>;
}
export {};

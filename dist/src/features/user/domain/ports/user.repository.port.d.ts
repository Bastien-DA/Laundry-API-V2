import { UserEntity } from '@features/user/domain/entities/user.entity';
import { AbstractRepository } from '@shared/domain/ports/abstract.repository';
import { ListParams } from '@shared/application/types/list-params';
export type UserFilter = {
    emailContains?: string;
    hasPerson?: boolean;
    personId?: string;
};
export type CreateUserCommand = {
    email: string;
    passwordHash: string;
    personId?: string | null;
};
export type EditUserCommand = {
    email?: string;
    personId?: string | null;
};
export declare abstract class UserRepository extends AbstractRepository<UserEntity, string, CreateUserCommand, EditUserCommand, UserFilter> {
    abstract findMany(params?: ListParams<UserFilter>): Promise<UserEntity[]>;
}

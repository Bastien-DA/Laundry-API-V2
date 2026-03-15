import { PrismaUserRepository } from '@features/user/infrastructure/prisma/user.prisma-repository';
import { UserMapper } from '@features/user/application/mappers/user.mapper';
export declare const userProviders: (typeof UserMapper | {
    provide: string;
    useClass: typeof PrismaUserRepository;
})[];

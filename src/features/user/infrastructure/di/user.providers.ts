import { PrismaUserRepository } from '@features/user/infrastructure/prisma/user.prisma-repository';
import { UserMapper } from '@features/user/application/mappers/user.mapper';

export const userProviders = [PrismaUserRepository, UserMapper];

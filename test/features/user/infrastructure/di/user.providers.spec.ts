import { userProviders } from '@features/user/infrastructure/di/user.providers';
import { PrismaUserRepository } from '@features/user/infrastructure/prisma/user.prisma-repository';

describe('userProviders', () => {
  it('should expose UserRepository provider', () => {
    const repoProvider = userProviders.find((p: any) => p.provide === 'UserRepository') as any;
    expect(repoProvider.useClass).toBe(PrismaUserRepository);
  });
});

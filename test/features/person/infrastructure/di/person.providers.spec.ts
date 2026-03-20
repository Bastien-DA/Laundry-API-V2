import { personProviders } from '@features/person/infrastructure/di/person.providers';
import { PrismaPersonRepository } from '@features/person/infrastructure/prisma/person.prisma-repository';

describe('personProviders', () => {
  it('should expose PersonRepository provider', () => {
    const repoProvider = personProviders.find((p: any) => p.provide === 'PersonRepository') as any;
    expect(repoProvider.useClass).toBe(PrismaPersonRepository);
  });
});

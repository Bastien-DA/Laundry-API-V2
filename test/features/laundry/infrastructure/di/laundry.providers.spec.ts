import { laundryProviders } from '@features/laundry/infrastructure/di/laundry.providers';
import { PrismaLaundryRepository } from '@features/laundry/infrastructure/prisma/laundry.prisma-repository';

describe('laundryProviders', () => {
  it('should expose LaundryRepository provider', () => {
    const repoProvider = laundryProviders.find((p: any) => p.provide === 'LaundryRepository') as any;
    expect(repoProvider.useClass).toBe(PrismaLaundryRepository);
  });
});

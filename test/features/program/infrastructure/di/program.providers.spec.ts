import { programProviders } from '@features/program/infrastructure/di/program.providers';
import { PrismaProgramRepository } from '@features/program/infrastructure/prisma/program.prisma-repository';

describe('programProviders', () => {
  it('should expose ProgramRepository provider', () => {
    const repoProvider = programProviders.find((p: any) => p.provide === 'ProgramRepository') as any;
    expect(repoProvider.useClass).toBe(PrismaProgramRepository);
  });
});

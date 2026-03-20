import { machineProviders } from '@features/machine/infrastructure/di/machine.providers';
import { PrismaMachineRepository } from '@features/machine/infrastructure/prisma/machine.prisma-repository';

describe('machineProviders', () => {
  it('should expose MachineRepository provider', () => {
    const repoProvider = machineProviders.find((p: any) => p.provide === 'MachineRepository') as any;
    expect(repoProvider.useClass).toBe(PrismaMachineRepository);
  });
});

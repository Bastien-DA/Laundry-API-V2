import { FixtureContext } from '@fixtures/fixture-context';
import { MachineStatusEnum } from '@prisma/client';

export async function seedMachineStatuses(ctx: FixtureContext) {
    // exemple : met la première machine en AVAILABLE (ou RUNNING si tu veux)
    const machineId = ctx.machines[0];
    if (!machineId) return;

    const existing = await ctx.prisma.machineStatus.findUnique({ where: { machineId } });
    if (existing) return;

    await ctx.prisma.machineStatus.create({
        data: {
            machine: { connect: { id: machineId } },
            status: MachineStatusEnum.AVAILABLE,
            // currentProgramId: null
        },
    });
}
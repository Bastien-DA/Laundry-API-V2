import { FixtureContext } from '@fixtures/fixture-context';
import { MachineType } from '@prisma/client';
import { pick } from '@fixtures/utils/rng';

export async function seedMachines(ctx: FixtureContext) {
    const laundryId = ctx.laundries[0];

    const defs = [
        { name: 'Washer 01', type: MachineType.WASHER, price: '4.50' },
        { name: 'Dryer 01', type: MachineType.DRYER, price: '3.00' },
        { name: 'Washer 02', type: MachineType.WASHER, price: '5.00' },
    ];

    for (const d of defs) {
        const existing = await ctx.prisma.machine.findFirst({ where: { name: d.name, laundryId } });
        if (existing) {
            ctx.machines.push(existing.id);
            continue;
        }

        // Attache 2-3 programs au hasard
        const programIds = Array.from(new Set([pick(ctx.rng, ctx.programs), pick(ctx.rng, ctx.programs)]));

        const created = await ctx.prisma.machine.create({
            data: {
                name: d.name,
                type: d.type,
                price: d.price as any,
                laundry: { connect: { id: laundryId } },
                programs: { connect: programIds.map((id) => ({ id })) },
            },
            select: { id: true },
        });

        ctx.machines.push(created.id);
    }
}
import { FixtureContext } from '@fixtures/fixture-context';

export async function seedPrograms(ctx: FixtureContext) {
    const defs = [
        { name: 'Rapide', temperature: 30, speed: 800, duration: 25 },
        { name: 'Eco', temperature: 40, speed: 1000, duration: 45 },
        { name: 'Intensif', temperature: 60, speed: 1200, duration: 60 },
    ];

    for (const d of defs) {
        const existing = await ctx.prisma.program.findFirst({ where: { name: d.name } });
        if (existing) {
            ctx.programs.push(existing.id);
            continue;
        }

        const created = await ctx.prisma.program.create({
            data: d,
            select: { id: true },
        });

        ctx.programs.push(created.id);
    }
}
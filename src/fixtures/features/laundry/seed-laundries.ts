import { FixtureContext } from '@fixtures/fixture-context';

export async function seedLaundries(ctx: FixtureContext) {
    const ownerPersonId = ctx.persons[0]; // Admin par ex.

    const defs = [
        { name: 'Laverie République', hours: '08:00-20:00', address: '10 Rue République', lat: '48.8566000', lng: '2.3522000' },
        { name: 'Laverie Gare', hours: '07:00-22:00', address: '1 Place de la Gare', lat: '48.8443000', lng: '2.3745000' },
    ];

    for (const d of defs) {
        const existing = await ctx.prisma.laundry.findFirst({ where: { name: d.name } });
        if (existing) {
            ctx.laundries.push(existing.id);
            continue;
        }

        const created = await ctx.prisma.laundry.create({
            data: {
                name: d.name,
                hours: d.hours,
                address: d.address,
                latitude: d.lat as any,
                longitude: d.lng as any,
                person: { connect: { id: ownerPersonId } },
            },
            select: { id: true },
        });

        ctx.laundries.push(created.id);
    }
}
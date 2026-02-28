import { FixtureContext } from '@fixtures/fixture-context';
import { PersonType } from '@prisma/client';

export async function seedPersons(ctx: FixtureContext) {
    const defs: Array<{ username: string; personType: PersonType; userIndex?: number }> = [
        { username: 'Admin', personType: PersonType.ADMIN, userIndex: 0 },
        { username: 'Tech', personType: PersonType.TECHNICIAN, userIndex: 1 },
        { username: 'Customer', personType: PersonType.CUSTOMER, userIndex: 2 },
    ];

    for (const d of defs) {
        const existing = await ctx.prisma.person.findFirst({ where: { username: d.username } });
        if (existing) {
            ctx.persons.push(existing.id);
            continue;
        }

        const created = await ctx.prisma.person.create({
            data: {
                username: d.username,
                personType: d.personType,
                ...(d.userIndex !== undefined
                    ? { user: { connect: { id: ctx.users[d.userIndex] } } }
                    : {}),
            },
            select: { id: true },
        });

        ctx.persons.push(created.id);
    }
}
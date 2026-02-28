import * as bcrypt from 'bcrypt';
import { FixtureContext } from '@fixtures/fixture-context';

export async function seedUsers(ctx: FixtureContext) {
    const emails = ['admin@dev.local', 'tech@dev.local', 'customer@dev.local'];

    for (const email of emails) {
        const existing = await ctx.prisma.user.findUnique({ where: { email } });

        if (existing) {
            ctx.users.push(existing.id);
            continue;
        }

        const created = await ctx.prisma.user.create({
            data: {
                email,
                passwordHash: await bcrypt.hash('Password123!', 10),
            },
            select: { id: true },
        });

        ctx.users.push(created.id);
    }
}
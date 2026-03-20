"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedPersons = seedPersons;
const client_1 = require("@prisma/client");
async function seedPersons(ctx) {
    const defs = [
        { username: 'Admin', personType: client_1.PersonType.ADMIN, userIndex: 0 },
        { username: 'Tech', personType: client_1.PersonType.TECHNICIAN, userIndex: 1 },
        { username: 'Customer', personType: client_1.PersonType.CUSTOMER, userIndex: 2 },
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
//# sourceMappingURL=seed-persons.js.map
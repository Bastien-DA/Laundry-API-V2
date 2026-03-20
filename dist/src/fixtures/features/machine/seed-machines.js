"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedMachines = seedMachines;
const client_1 = require("@prisma/client");
const rng_1 = require("../../utils/rng");
async function seedMachines(ctx) {
    const laundryId = ctx.laundries[0];
    const defs = [
        { name: 'Washer 01', type: client_1.MachineType.WASHER, price: '4.50' },
        { name: 'Dryer 01', type: client_1.MachineType.DRYER, price: '3.00' },
        { name: 'Washer 02', type: client_1.MachineType.WASHER, price: '5.00' },
    ];
    for (const d of defs) {
        const existing = await ctx.prisma.machine.findFirst({ where: { name: d.name, laundryId } });
        if (existing) {
            ctx.machines.push(existing.id);
            continue;
        }
        const programIds = Array.from(new Set([(0, rng_1.pick)(ctx.rng, ctx.programs), (0, rng_1.pick)(ctx.rng, ctx.programs)]));
        const created = await ctx.prisma.machine.create({
            data: {
                name: d.name,
                type: d.type,
                price: d.price,
                laundry: { connect: { id: laundryId } },
                programs: { connect: programIds.map((id) => ({ id })) },
            },
            select: { id: true },
        });
        ctx.machines.push(created.id);
    }
}
//# sourceMappingURL=seed-machines.js.map
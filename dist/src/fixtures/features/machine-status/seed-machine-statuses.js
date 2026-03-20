"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedMachineStatuses = seedMachineStatuses;
const client_1 = require("@prisma/client");
async function seedMachineStatuses(ctx) {
    const machineId = ctx.machines[0];
    if (!machineId)
        return;
    const existing = await ctx.prisma.machineStatus.findUnique({ where: { machineId } });
    if (existing)
        return;
    await ctx.prisma.machineStatus.create({
        data: {
            machine: { connect: { id: machineId } },
            status: client_1.MachineStatusEnum.AVAILABLE,
        },
    });
}
//# sourceMappingURL=seed-machine-statuses.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runFixtures = runFixtures;
const rng_1 = require("./utils/rng");
const seed_users_1 = require("./features/auth/seed-users");
const seed_persons_1 = require("./features/person/seed-persons");
const seed_laundries_1 = require("./features/laundry/seed-laundries");
const seed_programs_1 = require("./features/program/seed-programs");
const seed_machines_1 = require("./features/machine/seed-machines");
const seed_machine_statuses_1 = require("./features/machine-status/seed-machine-statuses");
async function runFixtures(prisma) {
    const ctx = {
        prisma,
        rng: (0, rng_1.mulberry32)(42),
        users: [],
        persons: [],
        laundries: [],
        programs: [],
        machines: [],
    };
    await (0, seed_users_1.seedUsers)(ctx);
    await (0, seed_persons_1.seedPersons)(ctx);
    await (0, seed_laundries_1.seedLaundries)(ctx);
    await (0, seed_programs_1.seedPrograms)(ctx);
    await (0, seed_machines_1.seedMachines)(ctx);
    await (0, seed_machine_statuses_1.seedMachineStatuses)(ctx);
    console.log('✅ Fixtures done', {
        users: ctx.users.length,
        persons: ctx.persons.length,
        laundries: ctx.laundries.length,
        programs: ctx.programs.length,
        machines: ctx.machines.length,
    });
}
//# sourceMappingURL=index.js.map
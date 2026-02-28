import { PrismaService } from '@core/database/prisma.service';
import { mulberry32 } from '@fixtures/utils/rng';
import { FixtureContext } from '@fixtures/fixture-context';

import { seedUsers } from '@fixtures/features/auth/seed-users';
import { seedPersons } from '@fixtures/features/person/seed-persons';
import { seedLaundries } from '@fixtures/features/laundry/seed-laundries';
import { seedPrograms } from '@fixtures/features/program/seed-programs';
import { seedMachines } from '@fixtures/features/machine/seed-machines';
import { seedMachineStatuses } from '@fixtures/features/machine-status/seed-machine-statuses';

export async function runFixtures(prisma: PrismaService) {
    const ctx: FixtureContext = {
        prisma,
        rng: mulberry32(42),
        users: [],
        persons: [],
        laundries: [],
        programs: [],
        machines: [],
    };

    // Optionnel : reset soft (attention aux FK)
    // await prisma.machineStatus.deleteMany();
    // await prisma.machine.deleteMany();
    // await prisma.program.deleteMany();
    // await prisma.laundry.deleteMany();
    // await prisma.person.deleteMany();
    // await prisma.user.deleteMany();

    await seedUsers(ctx);
    await seedPersons(ctx);
    await seedLaundries(ctx);
    await seedPrograms(ctx);
    await seedMachines(ctx);
    await seedMachineStatuses(ctx);

    console.log('✅ Fixtures done', {
        users: ctx.users.length,
        persons: ctx.persons.length,
        laundries: ctx.laundries.length,
        programs: ctx.programs.length,
        machines: ctx.machines.length,
    });
}
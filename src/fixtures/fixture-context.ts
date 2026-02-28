import { PrismaService } from '@core/database/prisma.service';

export type FixtureContext = {
    prisma: PrismaService;
    rng: () => number;

    users: string[];
    persons: string[];
    laundries: string[];
    programs: string[];
    machines: string[];
};
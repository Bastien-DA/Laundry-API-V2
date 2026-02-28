import 'dotenv/config';
import { PrismaService } from '@core/database/prisma.service';
import { runFixtures } from '@/fixtures';

async function main() {
    const prisma = new PrismaService();

    try {
        await prisma.$connect();
        await runFixtures(prisma);
    } finally {
        await prisma.$disconnect();
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
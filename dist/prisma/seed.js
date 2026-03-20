"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/core/database/prisma.service");
const fixtures_1 = require("../src/fixtures");
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    try {
        await prisma.$connect();
        await (0, fixtures_1.runFixtures)(prisma);
    }
    finally {
        await prisma.$disconnect();
    }
}
main().catch((e) => {
    console.error(e);
    process.exit(1);
});
//# sourceMappingURL=seed.js.map
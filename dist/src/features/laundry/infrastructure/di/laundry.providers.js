"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laundryProviders = void 0;
const laundry_prisma_repository_1 = require("../prisma/laundry.prisma-repository");
const laundry_mapper_1 = require("../../application/mappers/laundry.mapper");
exports.laundryProviders = [
    {
        provide: 'LaundryRepository',
        useClass: laundry_prisma_repository_1.PrismaLaundryRepository,
    },
    laundry_mapper_1.LaundryMapper
];
//# sourceMappingURL=laundry.providers.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.programProviders = void 0;
const program_prisma_repository_1 = require("../prisma/program.prisma-repository");
const program_mapper_1 = require("../../application/mappers/program.mapper");
exports.programProviders = [
    { provide: 'ProgramRepository', useClass: program_prisma_repository_1.PrismaProgramRepository },
    program_mapper_1.ProgramMapper,
];
//# sourceMappingURL=program.providers.js.map
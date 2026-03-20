"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.machineProviders = void 0;
const machine_prisma_repository_1 = require("../prisma/machine.prisma-repository");
const machine_mapper_1 = require("../../application/mappers/machine.mapper");
exports.machineProviders = [
    { provide: 'MachineRepository', useClass: machine_prisma_repository_1.PrismaMachineRepository },
    machine_mapper_1.MachineMapper,
];
//# sourceMappingURL=machine.providers.js.map
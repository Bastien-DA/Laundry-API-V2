"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineService = void 0;
const common_1 = require("@nestjs/common");
const abstract_service_1 = require("../../../../shared/application/services/abstract.service");
const machine_repository_port_1 = require("../../domain/ports/machine.repository.port");
const machine_mapper_1 = require("../mappers/machine.mapper");
const prisma_service_1 = require("../../../../core/database/prisma.service");
const client_1 = require("@prisma/client");
let MachineService = class MachineService extends abstract_service_1.AbstractService {
    prisma;
    constructor(repo, mapper, prisma) {
        super(repo, mapper);
        this.prisma = prisma;
    }
    async startProgram(machineId, programId, personId) {
        await this.prisma.$transaction(async (tx) => {
            const machine = await tx.machine.findUnique({
                where: { id: machineId },
                include: { machineStatus: true, programs: true },
            });
            if (!machine)
                throw new common_1.BadRequestException('Machine not found');
            const allowed = machine.programs.some(p => p.id === programId);
            if (!allowed)
                throw new common_1.BadRequestException('Program not allowed for this machine');
            const current = machine.machineStatus?.status;
            if (current === client_1.MachineStatusEnum.OUT_OF_ORDER)
                throw new common_1.BadRequestException('Machine is out of order');
            if (current === client_1.MachineStatusEnum.RUNNING)
                throw new common_1.BadRequestException('Machine already running');
            await tx.machine.update({
                where: { id: machineId },
                data: {
                    person: { connect: { id: personId } },
                },
            });
            if (!machine.machineStatus) {
                await tx.machineStatus.create({
                    data: {
                        machine: { connect: { id: machineId } },
                        status: client_1.MachineStatusEnum.RUNNING,
                        currentProgram: { connect: { id: programId } },
                    },
                });
            }
            else {
                await tx.machineStatus.update({
                    where: { machineId },
                    data: {
                        status: client_1.MachineStatusEnum.RUNNING,
                        currentProgram: { connect: { id: programId } },
                    },
                });
            }
        });
    }
    async pauseProgram(machineId) {
        await this.updateStatus(machineId, client_1.MachineStatusEnum.RUNNING, client_1.MachineStatusEnum.PAUSED);
    }
    async resumeProgram(machineId) {
        await this.updateStatus(machineId, client_1.MachineStatusEnum.PAUSED, client_1.MachineStatusEnum.RUNNING);
    }
    async stopProgram(machineId) {
        await this.prisma.machineStatus.update({
            where: { machineId },
            data: {
                status: client_1.MachineStatusEnum.AVAILABLE,
                currentProgram: { disconnect: true },
            },
        });
    }
    async setOutOfOrder(machineId) {
        await this.forceStatus(machineId, client_1.MachineStatusEnum.OUT_OF_ORDER);
    }
    async markAvailable(machineId) {
        await this.updateStatus(machineId, client_1.MachineStatusEnum.OUT_OF_ORDER, client_1.MachineStatusEnum.AVAILABLE);
    }
    async updateStatus(machineId, expected, next) {
        const status = await this.prisma.machineStatus.findUnique({
            where: { machineId },
        });
        if (!status)
            throw new common_1.BadRequestException('Machine has no status');
        if (status.status !== expected)
            throw new common_1.BadRequestException(`Invalid state transition (${status.status} → ${next})`);
        await this.prisma.machineStatus.update({
            where: { machineId },
            data: { status: next },
        });
    }
    async forceStatus(machineId, next) {
        const status = await this.prisma.machineStatus.findUnique({
            where: { machineId },
        });
        if (!status) {
            await this.prisma.machineStatus.create({
                data: {
                    machine: { connect: { id: machineId } },
                    status: next,
                },
            });
            return;
        }
        await this.prisma.machineStatus.update({
            where: { machineId },
            data: { status: next },
        });
    }
};
exports.MachineService = MachineService;
exports.MachineService = MachineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MachineRepository')),
    __metadata("design:paramtypes", [machine_repository_port_1.MachineRepository,
        machine_mapper_1.MachineMapper,
        prisma_service_1.PrismaService])
], MachineService);
//# sourceMappingURL=machine.service.js.map
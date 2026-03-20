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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaProgramRepository = void 0;
const prisma_service_1 = require("../../../../core/database/prisma.service");
const program_entity_1 = require("../../domain/entities/program.entity");
const common_1 = require("@nestjs/common");
let PrismaProgramRepository = class PrismaProgramRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    toEntity(row) {
        return new program_entity_1.ProgramEntity(row.id, row.name, row.temperature, row.speed, row.duration, (row.machines ?? []).map((m) => m.id), (row.currentOnStatuses ?? []).map((s) => s.id));
    }
    buildWhere(filter) {
        const where = {};
        if (!filter)
            return where;
        if (filter.nameContains) {
            where.name = { contains: filter.nameContains, mode: 'insensitive' };
        }
        if (filter.machineId) {
            where.machines = { some: { id: filter.machineId } };
        }
        return where;
    }
    buildOrderBy(sort) {
        if (!sort)
            return { name: 'asc' };
        return { [sort.field]: sort.direction };
    }
    async findById(id) {
        const row = await this.prisma.program.findUnique({
            where: { id },
            include: {
                machines: true,
                currentOnStatuses: true,
            },
        });
        return row ? this.toEntity(row) : null;
    }
    async findMany(params) {
        const rows = await this.prisma.program.findMany({
            where: this.buildWhere(params?.filter),
            orderBy: this.buildOrderBy(params?.sort),
            include: {
                machines: true,
                currentOnStatuses: true,
            },
        });
        return rows.map((r) => this.toEntity(r));
    }
    async create(cmd) {
        const row = await this.prisma.program.create({
            data: {
                name: cmd.name,
                temperature: cmd.temperature,
                speed: cmd.speed,
                duration: cmd.duration,
                ...(cmd.machineIds?.length && {
                    machines: { connect: cmd.machineIds.map((id) => ({ id })) },
                }),
            },
            include: {
                machines: true,
                currentOnStatuses: true,
            },
        });
        return this.toEntity(row);
    }
    async update(id, cmd) {
        const row = await this.prisma.program.update({
            where: { id },
            data: {
                ...(cmd.name !== undefined && { name: cmd.name }),
                ...(cmd.temperature !== undefined && { temperature: cmd.temperature }),
                ...(cmd.speed !== undefined && { speed: cmd.speed }),
                ...(cmd.duration !== undefined && { duration: cmd.duration }),
                ...(cmd.machineIds !== undefined && {
                    machines: { set: cmd.machineIds.map((x) => ({ id: x })) },
                }),
            },
            include: {
                machines: true,
                currentOnStatuses: true,
            },
        });
        return this.toEntity(row);
    }
    async delete(id) {
        await this.prisma.program.delete({ where: { id } });
    }
};
exports.PrismaProgramRepository = PrismaProgramRepository;
exports.PrismaProgramRepository = PrismaProgramRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaProgramRepository);
//# sourceMappingURL=program.prisma-repository.js.map
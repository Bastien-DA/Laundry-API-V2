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
exports.PrismaMachineRepository = void 0;
const prisma_service_1 = require("../../../../core/database/prisma.service");
const machine_entity_1 = require("../../domain/entities/machine.entity");
const common_1 = require("@nestjs/common");
let PrismaMachineRepository = class PrismaMachineRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    toEntity(row) {
        return new machine_entity_1.MachineEntity(row.id, row.name, row.type, row.price?.toString?.() ?? String(row.price), row.laundryId, row.personId ?? null, row.machineStatus?.id ?? null, row.machineStatus?.status ?? null, row.machineStatus?.currentProgramId ?? null, (row.programs ?? []).map((p) => p.id));
    }
    buildWhere(filter) {
        const where = {};
        if (!filter)
            return where;
        if (filter.laundryId)
            where.laundryId = filter.laundryId;
        if (filter.personId)
            where.personId = filter.personId;
        if (filter.type)
            where.type = filter.type;
        if (filter.programId)
            where.programs = { some: { id: filter.programId } };
        return where;
    }
    buildOrderBy(sort) {
        if (!sort)
            return { name: 'asc' };
        return { [sort.field]: sort.direction };
    }
    async findById(id) {
        const row = await this.prisma.machine.findUnique({
            where: { id },
            include: {
                programs: true,
                machineStatus: true,
            },
        });
        return row ? this.toEntity(row) : null;
    }
    async findMany(params) {
        const rows = await this.prisma.machine.findMany({
            where: this.buildWhere(params?.filter),
            orderBy: this.buildOrderBy(params?.sort),
            include: {
                programs: true,
                machineStatus: true,
            },
        });
        return rows.map((r) => this.toEntity(r));
    }
    async create(cmd) {
        const row = await this.prisma.machine.create({
            data: {
                name: cmd.name,
                type: cmd.type,
                price: cmd.price,
                laundry: { connect: { id: cmd.laundryId } },
                ...(cmd.personId && { person: { connect: { id: cmd.personId } } }),
                ...(cmd.programIds?.length && {
                    programs: { connect: cmd.programIds.map((id) => ({ id })) },
                }),
            },
            include: {
                programs: true,
                machineStatus: true,
            },
        });
        return this.toEntity(row);
    }
    async update(id, cmd) {
        const personProvided = cmd.personId !== undefined;
        const row = await this.prisma.machine.update({
            where: { id },
            data: {
                ...(cmd.name !== undefined && { name: cmd.name }),
                ...(cmd.type !== undefined && { type: cmd.type }),
                ...(cmd.price !== undefined && { price: cmd.price }),
                ...(personProvided &&
                    (cmd.personId
                        ? { person: { connect: { id: cmd.personId } } }
                        : { person: { disconnect: true } })),
                ...(cmd.programIds !== undefined && {
                    programs: { set: cmd.programIds.map((x) => ({ id: x })) },
                }),
            },
            include: {
                programs: true,
                machineStatus: true,
            },
        });
        return this.toEntity(row);
    }
    async delete(id) {
        await this.prisma.machine.delete({ where: { id } });
    }
};
exports.PrismaMachineRepository = PrismaMachineRepository;
exports.PrismaMachineRepository = PrismaMachineRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaMachineRepository);
//# sourceMappingURL=machine.prisma-repository.js.map
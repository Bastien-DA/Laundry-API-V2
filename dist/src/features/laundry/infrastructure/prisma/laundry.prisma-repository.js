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
exports.PrismaLaundryRepository = void 0;
const prisma_service_1 = require("../../../../core/database/prisma.service");
const laundry_entity_1 = require("../../domain/entities/laundry.entity");
const common_1 = require("@nestjs/common");
let PrismaLaundryRepository = class PrismaLaundryRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    toEntity(row) {
        return new laundry_entity_1.LaundryEntity(row.id, row.name, row.hours, row.address, row.latitude?.toString?.() ?? String(row.latitude), row.longitude?.toString?.() ?? String(row.longitude), row.createdAt, row.personId, (row.machines ?? []).map((m) => m.id));
    }
    buildWhere(filter) {
        const where = {};
        if (!filter)
            return where;
        if (filter.nameContains) {
            where.name = { contains: filter.nameContains, mode: 'insensitive' };
        }
        if (filter.personId)
            where.personId = filter.personId;
        if (filter.machineId)
            where.machines = { some: { id: filter.machineId } };
        return where;
    }
    buildOrderBy(sort) {
        if (!sort)
            return { createdAt: 'desc' };
        return { [sort.field]: sort.direction };
    }
    async findById(id) {
        const row = await this.prisma.laundry.findUnique({
            where: { id },
            include: {
                machines: { select: { id: true } },
            },
        });
        return row ? this.toEntity(row) : null;
    }
    async findMany(params) {
        const rows = await this.prisma.laundry.findMany({
            where: this.buildWhere(params?.filter),
            orderBy: this.buildOrderBy(params?.sort),
            include: {
                machines: { select: { id: true } },
            },
        });
        return rows.map((r) => this.toEntity(r));
    }
    async create(cmd) {
        const row = await this.prisma.laundry.create({
            data: {
                name: cmd.name,
                hours: cmd.hours,
                address: cmd.address,
                latitude: cmd.latitude,
                longitude: cmd.longitude,
                person: { connect: { id: cmd.personId } },
                ...(cmd.machineIds?.length && {
                    machines: { connect: cmd.machineIds.map((id) => ({ id })) },
                }),
            },
            include: {
                machines: true,
            },
        });
        return this.toEntity(row);
    }
    async update(id, cmd) {
        const row = await this.prisma.laundry.update({
            where: { id },
            data: {
                ...(cmd.name !== undefined && { name: cmd.name }),
                ...(cmd.hours !== undefined && { hours: cmd.hours }),
                ...(cmd.address !== undefined && { address: cmd.address }),
                ...(cmd.latitude !== undefined && { latitude: cmd.latitude }),
                ...(cmd.longitude !== undefined && { longitude: cmd.longitude }),
                ...(cmd.personId !== undefined && {
                    person: { connect: { id: cmd.personId } },
                }),
                ...(cmd.machineIds !== undefined && {
                    machines: { set: cmd.machineIds.map((x) => ({ id: x })) },
                }),
            },
            include: {
                machines: true,
            },
        });
        return this.toEntity(row);
    }
    async delete(id) {
        await this.prisma.laundry.delete({ where: { id } });
    }
};
exports.PrismaLaundryRepository = PrismaLaundryRepository;
exports.PrismaLaundryRepository = PrismaLaundryRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaLaundryRepository);
//# sourceMappingURL=laundry.prisma-repository.js.map
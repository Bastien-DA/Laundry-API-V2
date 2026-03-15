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
exports.PrismaPersonRepository = void 0;
const prisma_service_1 = require("../../../../core/database/prisma.service");
const person_entity_1 = require("../../domain/entities/person.entity");
const common_1 = require("@nestjs/common");
let PrismaPersonRepository = class PrismaPersonRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    toEntity(row) {
        return new person_entity_1.PersonEntity(row.id, row.username, row.personType, (row.laundries ?? []).map((x) => x.id), (row.machines ?? []).map((x) => x.id), row.user?.id ?? null);
    }
    buildWhere(filter) {
        const where = {};
        if (!filter)
            return where;
        if (filter.usernameContains) {
            where.username = { contains: filter.usernameContains, mode: 'insensitive' };
        }
        if (filter.personType)
            where.personType = filter.personType;
        if (filter.laundryId)
            where.laundries = { some: { id: filter.laundryId } };
        if (filter.machineId)
            where.machines = { some: { id: filter.machineId } };
        if (filter.hasUser === true)
            where.user = { isNot: null };
        if (filter.hasUser === false)
            where.user = { is: null };
        if (filter.userId)
            where.user = { is: { id: filter.userId } };
        return where;
    }
    buildOrderBy(sort) {
        if (!sort)
            return { username: 'asc' };
        return { [sort.field]: sort.direction };
    }
    async findById(id) {
        const row = await this.prisma.person.findUnique({
            where: { id },
            select: { id: true, personType: true, username: true, user: { select: { id: true } } },
        });
        return row ? this.toEntity(row) : null;
    }
    async findMany(params) {
        const rows = await this.prisma.person.findMany({
            where: this.buildWhere(params?.filter),
            orderBy: this.buildOrderBy(params?.sort),
            select: { id: true },
        });
        return rows.map((r) => this.toEntity(r));
    }
    async create(cmd) {
        const row = await this.prisma.person.create({
            data: {
                username: cmd.username,
                personType: cmd.personType,
                ...(cmd.laundryIds?.length ? { laundries: { connect: cmd.laundryIds.map((id) => ({ id })) } } : {}),
                ...(cmd.machineIds?.length ? { machines: { connect: cmd.machineIds.map((id) => ({ id })) } } : {}),
                ...(cmd.userId ? { user: { connect: { id: cmd.userId } } } : {}),
            },
            select: { id: true },
        });
        return this.toEntity(row);
    }
    async update(id, cmd) {
        const userIdProvided = cmd.userId !== undefined;
        const row = await this.prisma.person.update({
            where: { id },
            data: {
                ...(cmd.username !== undefined ? { username: cmd.username } : {}),
                ...(cmd.personType !== undefined ? { personType: cmd.personType } : {}),
                ...(cmd.laundryIds !== undefined
                    ? { laundries: { set: cmd.laundryIds.map((x) => ({ id: x })) } }
                    : {}),
                ...(cmd.machineIds !== undefined
                    ? { machines: { set: cmd.machineIds.map((x) => ({ id: x })) } }
                    : {}),
                ...(userIdProvided
                    ? cmd.userId
                        ? { user: { connect: { id: cmd.userId } } }
                        : { user: { disconnect: true } }
                    : {}),
            },
            select: { id: true },
        });
        return this.toEntity(row);
    }
    async delete(id) {
        await this.prisma.person.delete({ where: { id } });
    }
};
exports.PrismaPersonRepository = PrismaPersonRepository;
exports.PrismaPersonRepository = PrismaPersonRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaPersonRepository);
//# sourceMappingURL=person.prisma-repository.js.map
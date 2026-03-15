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
exports.PrismaUserRepository = void 0;
const prisma_service_1 = require("../../../../core/database/prisma.service");
const user_entity_1 = require("../../domain/entities/user.entity");
const common_1 = require("@nestjs/common");
let PrismaUserRepository = class PrismaUserRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    toEntity(row) {
        return new user_entity_1.UserEntity(row.id, row.email, row.createdAt, row.personId ?? null);
    }
    buildWhere(filter) {
        const where = {};
        if (!filter)
            return where;
        if (filter.emailContains) {
            where.email = { contains: filter.emailContains, mode: 'insensitive' };
        }
        if (filter.hasPerson === true)
            where.personId = { not: null };
        if (filter.hasPerson === false)
            where.personId = null;
        if (filter.personId)
            where.personId = filter.personId;
        return where;
    }
    buildOrderBy(sort) {
        if (!sort)
            return { createdAt: 'desc' };
        return { [sort.field]: sort.direction };
    }
    async findById(id) {
        const row = await this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                createdAt: true,
                personId: true,
            },
        });
        return row ? this.toEntity(row) : null;
    }
    async findMany(params) {
        const rows = await this.prisma.user.findMany({
            where: this.buildWhere(params?.filter),
            orderBy: this.buildOrderBy(params?.sort),
            select: {
                id: true,
                email: true,
                createdAt: true,
                personId: true,
            },
        });
        return rows.map((r) => this.toEntity(r));
    }
    async create(cmd) {
        const row = await this.prisma.user.create({
            data: {
                email: cmd.email,
                passwordHash: cmd.passwordHash,
                ...(cmd.personId ? { person: { connect: { id: cmd.personId } } } : {}),
            },
            select: {
                id: true,
                email: true,
                createdAt: true,
                personId: true,
            },
        });
        return this.toEntity(row);
    }
    async update(id, cmd) {
        const personIdProvided = cmd.personId !== undefined;
        const row = await this.prisma.user.update({
            where: { id },
            data: {
                ...(cmd.email !== undefined ? { email: cmd.email } : {}),
                ...(personIdProvided
                    ? cmd.personId
                        ? { person: { connect: { id: cmd.personId } } }
                        : { person: { disconnect: true } }
                    : {}),
            },
            select: {
                id: true,
                email: true,
                createdAt: true,
                personId: true,
            },
        });
        return this.toEntity(row);
    }
    async delete(id) {
        await this.prisma.user.delete({ where: { id } });
    }
};
exports.PrismaUserRepository = PrismaUserRepository;
exports.PrismaUserRepository = PrismaUserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaUserRepository);
//# sourceMappingURL=user.prisma-repository.js.map
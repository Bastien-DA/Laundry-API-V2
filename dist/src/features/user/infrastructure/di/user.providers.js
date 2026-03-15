"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const user_prisma_repository_1 = require("../prisma/user.prisma-repository");
const user_mapper_1 = require("../../application/mappers/user.mapper");
exports.userProviders = [
    {
        provide: 'UserRepository',
        useClass: user_prisma_repository_1.PrismaUserRepository
    },
    user_mapper_1.UserMapper
];
//# sourceMappingURL=user.providers.js.map
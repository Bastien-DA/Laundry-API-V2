"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personProviders = void 0;
const person_prisma_repository_1 = require("../prisma/person.prisma-repository");
const person_mapper_1 = require("../../application/mappers/person.mapper");
exports.personProviders = [
    {
        provide: 'PersonRepository',
        useClass: person_prisma_repository_1.PrismaPersonRepository
    },
    person_mapper_1.PersonMapper
];
//# sourceMappingURL=person.providers.js.map
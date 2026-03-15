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
exports.ProgramService = void 0;
const program_mapper_1 = require("../mappers/program.mapper");
const common_1 = require("@nestjs/common");
const program_repository_port_1 = require("../../domain/ports/program.repository.port");
const abstract_service_1 = require("../../../../shared/application/services/abstract.service");
let ProgramService = class ProgramService extends abstract_service_1.AbstractService {
    constructor(repo, mapper) {
        super(repo, mapper);
    }
};
exports.ProgramService = ProgramService;
exports.ProgramService = ProgramService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ProgramRepository')),
    __metadata("design:paramtypes", [program_repository_port_1.ProgramRepository,
        program_mapper_1.ProgramMapper])
], ProgramService);
//# sourceMappingURL=program.service.js.map
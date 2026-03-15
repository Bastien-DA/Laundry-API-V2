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
exports.ProgramController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const edit_program_dto_1 = require("./dtos/edit-program.dto");
const create_program_dto_1 = require("./dtos/create-program.dto");
const program_filter_dto_1 = require("./dtos/program-filter.dto");
const program_dto_1 = require("./dtos/program.dto");
const program_service_1 = require("../../application/services/program.service");
const roles_decorator_1 = require("../../../auth/infrastructure/security/roles.decorator");
let ProgramController = class ProgramController {
    service;
    constructor(service) {
        this.service = service;
    }
    getById(id) {
        return this.service.getById(id);
    }
    list(filter) {
        return this.service.list({ filter });
    }
    create(dto) {
        return this.service.create(dto);
    }
    edit(id, dto) {
        return this.service.edit(id, dto);
    }
    remove(id) {
        return this.service.remove(id);
    }
};
exports.ProgramController = ProgramController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a program by id' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiOkResponse)({ type: program_dto_1.ProgramDto }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProgramController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List programs (no pagination)' }),
    (0, swagger_1.ApiOkResponse)({ type: program_dto_1.ProgramDto, isArray: true }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [program_filter_dto_1.ProgramFilterDto]),
    __metadata("design:returntype", Promise)
], ProgramController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a program' }),
    (0, swagger_1.ApiCreatedResponse)({ type: program_dto_1.ProgramDto }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_program_dto_1.CreateProgramDto]),
    __metadata("design:returntype", Promise)
], ProgramController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Edit a program' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiOkResponse)({ type: program_dto_1.ProgramDto }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_program_dto_1.EditProgramDto]),
    __metadata("design:returntype", Promise)
], ProgramController.prototype, "edit", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a program' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProgramController.prototype, "remove", null);
exports.ProgramController = ProgramController = __decorate([
    (0, common_1.Controller)('programs'),
    __metadata("design:paramtypes", [program_service_1.ProgramService])
], ProgramController);
//# sourceMappingURL=program.controller.js.map
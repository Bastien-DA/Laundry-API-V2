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
exports.MachineController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const machine_service_1 = require("../../application/services/machine.service");
const create_machine_dto_1 = require("./dtos/create-machine.dto");
const edit_machine_dto_1 = require("./dtos/edit-machine.dto");
const machine_filter_dto_1 = require("./dtos/machine-filter.dto");
const machine_dto_1 = require("./dtos/machine.dto");
const roles_decorator_1 = require("../../../auth/infrastructure/security/roles.decorator");
const jwt_auth_guard_1 = require("../../../auth/infrastructure/security/jwt-auth-guard");
let MachineController = class MachineController {
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
    start(req, id, programId) {
        return this.service.startProgram(id, programId, req.user.user.personId);
    }
    pause(id) {
        return this.service.pauseProgram(id);
    }
    resume(id) {
        return this.service.resumeProgram(id);
    }
    stop(id) {
        return this.service.stopProgram(id);
    }
    outOfOrder(id) {
        return this.service.setOutOfOrder(id);
    }
    available(id) {
        return this.service.markAvailable(id);
    }
};
exports.MachineController = MachineController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a machine by id' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiOkResponse)({ type: machine_dto_1.MachineDto }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List machines (no pagination)' }),
    (0, swagger_1.ApiOkResponse)({ type: machine_dto_1.MachineDto, isArray: true }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [machine_filter_dto_1.MachineFilterDto]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a machine' }),
    (0, swagger_1.ApiCreatedResponse)({ type: machine_dto_1.MachineDto }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_machine_dto_1.CreateMachineDto]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Edit a machine' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiOkResponse)({ type: machine_dto_1.MachineDto }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_machine_dto_1.EditMachineDto]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "edit", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a machine' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Start a program on a machine' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiParam)({ name: 'programId', type: String }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/start/:programId'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('programId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "start", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Pause current program' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Post)(':id/pause'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "pause", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Resume paused program' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Post)(':id/resume'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "resume", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Stop program and mark machine as available' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Post)(':id/stop'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "stop", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Set machine as out of order' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Post)(':id/out-of-order'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "outOfOrder", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Mark machine as available (from OUT_OF_ORDER)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Post)(':id/available'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "available", null);
exports.MachineController = MachineController = __decorate([
    (0, common_1.Controller)('machines'),
    __metadata("design:paramtypes", [machine_service_1.MachineService])
], MachineController);
//# sourceMappingURL=machine.controller.js.map
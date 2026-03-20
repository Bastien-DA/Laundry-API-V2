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
exports.LaundryController = void 0;
const common_1 = require("@nestjs/common");
const laundry_service_1 = require("../../application/services/laundry.service");
const create_laundry_dto_1 = require("./dtos/create-laundry.dto");
const edit_laundry_dto_1 = require("./dtos/edit-laundry.dto");
const laundry_filter_dto_1 = require("./dtos/laundry-filter.dto");
const roles_decorator_1 = require("../../../auth/infrastructure/security/roles.decorator");
const laundry_dto_1 = require("./dtos/laundry.dto");
const swagger_1 = require("@nestjs/swagger");
let LaundryController = class LaundryController {
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
exports.LaundryController = LaundryController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a laundry by id' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiOkResponse)({ type: laundry_dto_1.LaundryDto }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LaundryController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List laundries (no pagination)' }),
    (0, swagger_1.ApiOkResponse)({ type: laundry_dto_1.LaundryDto, isArray: true }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laundry_filter_dto_1.LaundryFilterDto]),
    __metadata("design:returntype", Promise)
], LaundryController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a laundry' }),
    (0, swagger_1.ApiCreatedResponse)({ type: laundry_dto_1.LaundryDto }),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_laundry_dto_1.CreateLaundryDto]),
    __metadata("design:returntype", Promise)
], LaundryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Edit a laundry' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiOkResponse)({ type: laundry_dto_1.LaundryDto }),
    (0, roles_decorator_1.Roles)('ADMIN', 'TECHNICIAN'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_laundry_dto_1.EditLaundryDto]),
    __metadata("design:returntype", Promise)
], LaundryController.prototype, "edit", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a laundry' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LaundryController.prototype, "remove", null);
exports.LaundryController = LaundryController = __decorate([
    (0, common_1.Controller)('laundries'),
    __metadata("design:paramtypes", [laundry_service_1.LaundryService])
], LaundryController);
//# sourceMappingURL=laundry.controller.js.map
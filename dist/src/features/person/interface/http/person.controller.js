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
exports.PersonController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const person_service_1 = require("../../application/services/person.service");
const create_person_dto_1 = require("./dtos/create-person.dto");
const edit_person_dto_1 = require("./dtos/edit-person.dto");
const person_filter_dto_1 = require("./dtos/person-filter.dto");
const person_dto_1 = require("./dtos/person.dto");
let PersonController = class PersonController {
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
exports.PersonController = PersonController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a person by id' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiOkResponse)({ type: person_dto_1.PersonDto }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List persons (no pagination)' }),
    (0, swagger_1.ApiOkResponse)({ type: person_dto_1.PersonDto, isArray: true }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_filter_dto_1.PersonFilterDto]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a person' }),
    (0, swagger_1.ApiCreatedResponse)({ type: person_dto_1.PersonDto }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_dto_1.CreatePersonDto]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Edit a person' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiOkResponse)({ type: person_dto_1.PersonDto }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_person_dto_1.EditPersonDto]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "edit", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a person' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "remove", null);
exports.PersonController = PersonController = __decorate([
    (0, common_1.Controller)('persons'),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], PersonController);
//# sourceMappingURL=person.controller.js.map
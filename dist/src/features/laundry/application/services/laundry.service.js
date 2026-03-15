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
exports.LaundryService = void 0;
const common_1 = require("@nestjs/common");
const abstract_service_1 = require("../../../../shared/application/services/abstract.service");
const laundry_mapper_1 = require("../mappers/laundry.mapper");
const laundry_repository_port_1 = require("../../domain/ports/laundry.repository.port");
let LaundryService = class LaundryService extends abstract_service_1.AbstractService {
    constructor(repo, mapper) {
        super(repo, mapper);
    }
};
exports.LaundryService = LaundryService;
exports.LaundryService = LaundryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('LaundryRepository')),
    __metadata("design:paramtypes", [laundry_repository_port_1.LaundryRepository, laundry_mapper_1.LaundryMapper])
], LaundryService);
//# sourceMappingURL=laundry.service.js.map
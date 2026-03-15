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
exports.MachineDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class MachineDto {
    id;
    name;
    type;
    price;
    laundryId;
    personId;
    machineStatusId;
    status;
    currentProgramId;
    programIds;
}
exports.MachineDto = MachineDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'c1a7d3e2-4b89-4f1b-9c7e-6a2d8f3e1b90',
        description: 'Unique identifier of the machine',
    }),
    __metadata("design:type", String)
], MachineDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Washer 01',
        description: 'Display name of the machine',
    }),
    __metadata("design:type", String)
], MachineDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.MachineType,
        example: client_1.MachineType.WASHER,
        description: 'Type of machine',
    }),
    __metadata("design:type", String)
], MachineDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '4.50',
        description: 'Price stored as string (Decimal)',
    }),
    __metadata("design:type", String)
], MachineDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'laundry-uuid',
        description: 'Laundry owning this machine',
    }),
    __metadata("design:type", String)
], MachineDto.prototype, "laundryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        nullable: true,
        example: 'person-uuid',
        description: 'Assigned technician (0..1)',
    }),
    __metadata("design:type", Object)
], MachineDto.prototype, "personId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        nullable: true,
        example: 'machine-status-uuid',
        description: 'MachineStatus id (1–1 optional)',
    }),
    __metadata("design:type", Object)
], MachineDto.prototype, "machineStatusId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.MachineStatusEnum,
        nullable: true,
        example: client_1.MachineStatusEnum.AVAILABLE,
        description: 'Current machine status',
    }),
    __metadata("design:type", Object)
], MachineDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        nullable: true,
        example: 'program-uuid',
        description: 'Current running program (if any)',
    }),
    __metadata("design:type", Object)
], MachineDto.prototype, "currentProgramId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['program-uuid-1', 'program-uuid-2'],
        description: 'Compatible programs',
    }),
    __metadata("design:type", Array)
], MachineDto.prototype, "programIds", void 0);
//# sourceMappingURL=machine.dto.js.map
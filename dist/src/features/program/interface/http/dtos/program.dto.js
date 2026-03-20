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
exports.ProgramDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ProgramDto {
    id;
    name;
    temperature;
    speed;
    duration;
    machineIds;
    machineStatusIds;
}
exports.ProgramDto = ProgramDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'b8f7c3d2-4a9e-4c1f-8f1b-7e6c3a2d1f90',
        description: 'Unique identifier of the program',
    }),
    __metadata("design:type", String)
], ProgramDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Eco 40°',
        description: 'Program display name',
    }),
    __metadata("design:type", String)
], ProgramDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 40,
        description: 'Temperature in °C',
    }),
    __metadata("design:type", Number)
], ProgramDto.prototype, "temperature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1000,
        description: 'Spin speed in RPM',
    }),
    __metadata("design:type", Number)
], ProgramDto.prototype, "speed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 45,
        description: 'Duration in minutes',
    }),
    __metadata("design:type", Number)
], ProgramDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['machine-uuid-1', 'machine-uuid-2'],
        description: 'Machines compatible with this program',
    }),
    __metadata("design:type", Array)
], ProgramDto.prototype, "machineIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['status-uuid-1'],
        description: 'MachineStatus entries currently using this program',
    }),
    __metadata("design:type", Array)
], ProgramDto.prototype, "machineStatusIds", void 0);
//# sourceMappingURL=program.dto.js.map
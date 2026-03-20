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
exports.LaundryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class LaundryDto {
    id;
    name;
    hours;
    address;
    latitude;
    longitude;
    createdAt;
    personId;
    machineIds;
}
exports.LaundryDto = LaundryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'a3f1c7d2-6b2e-4b89-9c7e-1f5a8d3e2b44',
        description: 'Unique identifier of the laundry',
    }),
    __metadata("design:type", String)
], LaundryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Laverie République',
    }),
    __metadata("design:type", String)
], LaundryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '08:00-20:00',
    }),
    __metadata("design:type", String)
], LaundryDto.prototype, "hours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '10 Rue République, Paris',
    }),
    __metadata("design:type", String)
], LaundryDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '48.8566000',
        description: 'Latitude stored as string (Decimal)',
    }),
    __metadata("design:type", String)
], LaundryDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2.3522000',
        description: 'Longitude stored as string (Decimal)',
    }),
    __metadata("design:type", String)
], LaundryDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1709136000000,
        description: 'Creation timestamp in milliseconds',
    }),
    __metadata("design:type", Number)
], LaundryDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'person-uuid',
        description: 'Owner person id',
    }),
    __metadata("design:type", String)
], LaundryDto.prototype, "personId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['machine-uuid-1', 'machine-uuid-2'],
        description: 'List of machine ids attached to the laundry',
    }),
    __metadata("design:type", Array)
], LaundryDto.prototype, "machineIds", void 0);
//# sourceMappingURL=laundry.dto.js.map
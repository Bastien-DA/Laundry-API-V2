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
exports.PersonDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class PersonDto {
    id;
    username;
    personType;
    laundryIds;
    machineIds;
    userId;
}
exports.PersonDto = PersonDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'b8f7c3d2-4a9e-4c1f-8f1b-7e6c3a2d1f90',
        description: 'Unique identifier of the person',
    }),
    __metadata("design:type", String)
], PersonDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'JohnDoe',
        description: 'Public username',
    }),
    __metadata("design:type", String)
], PersonDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.PersonType,
        example: client_1.PersonType.ADMIN,
        description: 'Role of the person',
    }),
    __metadata("design:type", String)
], PersonDto.prototype, "personType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['laundry-uuid-1'],
        description: 'IDs of laundries owned by this person',
    }),
    __metadata("design:type", Array)
], PersonDto.prototype, "laundryIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['machine-uuid-1'],
        description: 'IDs of machines assigned to this person',
    }),
    __metadata("design:type", Array)
], PersonDto.prototype, "machineIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        nullable: true,
        example: 'user-uuid',
        description: 'Linked user account (0..1)',
    }),
    __metadata("design:type", Object)
], PersonDto.prototype, "userId", void 0);
//# sourceMappingURL=person.dto.js.map
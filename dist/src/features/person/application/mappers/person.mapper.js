"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonMapper = void 0;
class PersonMapper {
    toDto(e) {
        return {
            id: e.id,
            username: e.username,
            personType: e.personType,
            laundryIds: e.laundryIds,
            machineIds: e.machineIds,
            userId: e.userId,
        };
    }
    fromCreateDto(dto) {
        return {
            username: dto.username,
            personType: dto.personType,
            laundryIds: dto.laundryIds ?? [],
            machineIds: dto.machineIds ?? [],
            userId: dto.userId ?? null,
        };
    }
    fromEditDto(dto) {
        return {
            username: dto.username,
            personType: dto.personType,
            laundryIds: dto.laundryIds,
            machineIds: dto.machineIds,
            userId: dto.userId,
        };
    }
}
exports.PersonMapper = PersonMapper;
//# sourceMappingURL=person.mapper.js.map
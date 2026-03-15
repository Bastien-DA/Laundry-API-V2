"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaundryMapper = void 0;
class LaundryMapper {
    toDto(e) {
        return {
            id: e.id,
            name: e.name,
            hours: e.hours,
            address: e.address,
            latitude: e.latitude,
            longitude: e.longitude,
            createdAt: e.createdAt.getTime(),
            personId: e.personId,
            machineIds: e.machineIds,
        };
    }
    fromCreateDto(dto) {
        return {
            name: dto.name,
            hours: dto.hours,
            address: dto.address,
            latitude: dto.latitude,
            longitude: dto.longitude,
            personId: dto.personId,
            machineIds: dto.machineIds ?? [],
        };
    }
    fromEditDto(dto) {
        return {
            name: dto.name,
            hours: dto.hours,
            address: dto.address,
            latitude: dto.latitude,
            longitude: dto.longitude,
            personId: dto.personId,
            machineIds: dto.machineIds,
        };
    }
}
exports.LaundryMapper = LaundryMapper;
//# sourceMappingURL=laundry.mapper.js.map
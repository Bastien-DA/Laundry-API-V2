"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineMapper = void 0;
class MachineMapper {
    toDto(e) {
        return {
            id: e.id,
            name: e.name,
            type: e.type,
            price: e.price,
            laundryId: e.laundryId,
            personId: e.personId,
            machineStatusId: e.machineStatusId,
            status: e.status,
            currentProgramId: e.currentProgramId,
            programIds: e.programIds,
        };
    }
    fromCreateDto(dto) {
        return {
            name: dto.name,
            type: dto.type,
            price: dto.price,
            laundryId: dto.laundryId,
            personId: dto.personId ?? null,
            programIds: dto.programIds ?? [],
        };
    }
    fromEditDto(dto) {
        return {
            name: dto.name,
            type: dto.type,
            price: dto.price,
            personId: dto.personId,
            programIds: dto.programIds,
        };
    }
}
exports.MachineMapper = MachineMapper;
//# sourceMappingURL=machine.mapper.js.map
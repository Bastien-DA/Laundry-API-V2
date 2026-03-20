"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramMapper = void 0;
class ProgramMapper {
    toDto(e) {
        return {
            id: e.id,
            name: e.name,
            temperature: e.temperature,
            speed: e.speed,
            duration: e.duration,
            machineIds: e.machineIds,
            machineStatusIds: e.machineStatusIds,
        };
    }
    fromCreateDto(dto) {
        return {
            name: dto.name,
            temperature: dto.temperature,
            speed: dto.speed,
            duration: dto.duration,
            machineIds: dto.machineIds ?? [],
        };
    }
    fromEditDto(dto) {
        return {
            name: dto.name,
            temperature: dto.temperature,
            speed: dto.speed,
            duration: dto.duration,
            machineIds: dto.machineIds,
        };
    }
}
exports.ProgramMapper = ProgramMapper;
//# sourceMappingURL=program.mapper.js.map
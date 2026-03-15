"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramEntity = void 0;
class ProgramEntity {
    id;
    name;
    temperature;
    speed;
    duration;
    machineIds;
    machineStatusIds;
    constructor(id, name, temperature, speed, duration, machineIds, machineStatusIds) {
        this.id = id;
        this.name = name;
        this.temperature = temperature;
        this.speed = speed;
        this.duration = duration;
        this.machineIds = machineIds;
        this.machineStatusIds = machineStatusIds;
    }
}
exports.ProgramEntity = ProgramEntity;
//# sourceMappingURL=program.entity.js.map
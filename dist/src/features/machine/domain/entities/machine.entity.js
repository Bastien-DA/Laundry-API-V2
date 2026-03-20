"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineEntity = void 0;
class MachineEntity {
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
    constructor(id, name, type, price, laundryId, personId, machineStatusId, status, currentProgramId, programIds) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.laundryId = laundryId;
        this.personId = personId;
        this.machineStatusId = machineStatusId;
        this.status = status;
        this.currentProgramId = currentProgramId;
        this.programIds = programIds;
    }
}
exports.MachineEntity = MachineEntity;
//# sourceMappingURL=machine.entity.js.map
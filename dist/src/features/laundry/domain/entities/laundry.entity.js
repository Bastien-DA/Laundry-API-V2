"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaundryEntity = void 0;
class LaundryEntity {
    id;
    name;
    hours;
    address;
    latitude;
    longitude;
    createdAt;
    personId;
    machineIds;
    constructor(id, name, hours, address, latitude, longitude, createdAt, personId, machineIds) {
        this.id = id;
        this.name = name;
        this.hours = hours;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.createdAt = createdAt;
        this.personId = personId;
        this.machineIds = machineIds;
    }
}
exports.LaundryEntity = LaundryEntity;
//# sourceMappingURL=laundry.entity.js.map
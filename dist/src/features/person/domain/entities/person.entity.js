"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonEntity = void 0;
class PersonEntity {
    id;
    username;
    personType;
    laundryIds;
    machineIds;
    userId;
    constructor(id, username, personType, laundryIds, machineIds, userId) {
        this.id = id;
        this.username = username;
        this.personType = personType;
        this.laundryIds = laundryIds;
        this.machineIds = machineIds;
        this.userId = userId;
    }
}
exports.PersonEntity = PersonEntity;
//# sourceMappingURL=person.entity.js.map
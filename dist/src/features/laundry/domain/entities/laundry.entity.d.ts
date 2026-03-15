export declare class LaundryEntity {
    readonly id: string;
    name: string;
    hours: string;
    address: string;
    latitude: string;
    longitude: string;
    createdAt: Date;
    personId: string;
    machineIds: string[];
    constructor(id: string, name: string, hours: string, address: string, latitude: string, longitude: string, createdAt: Date, personId: string, machineIds: string[]);
}

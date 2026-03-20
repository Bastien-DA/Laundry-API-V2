export declare class ProgramEntity {
    readonly id: string;
    name: string;
    temperature: number;
    speed: number;
    duration: number;
    machineIds: string[];
    machineStatusIds: string[];
    constructor(id: string, name: string, temperature: number, speed: number, duration: number, machineIds: string[], machineStatusIds: string[]);
}

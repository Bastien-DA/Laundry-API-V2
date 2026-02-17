export class ProgramDto {
    id!: string;
    name!: string;
    temperature!: number;
    speed!: number;
    duration!: number;

    machineIds!: string[];
    machineStatusIds!: string[];
}

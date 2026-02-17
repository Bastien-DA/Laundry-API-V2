export class ProgramEntity {
    constructor(
        public readonly id: string,
        public name: string,
        public temperature: number,
        public speed: number,
        public duration: number,

        public machineIds: string[],
        public machineStatusIds: string[],
    ) {}
}

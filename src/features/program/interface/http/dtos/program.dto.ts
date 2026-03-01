import { ApiProperty } from '@nestjs/swagger';

export class ProgramDto {

    @ApiProperty({
        example: 'b8f7c3d2-4a9e-4c1f-8f1b-7e6c3a2d1f90',
        description: 'Unique identifier of the program',
    })
    id!: string;

    @ApiProperty({
        example: 'Eco 40°',
        description: 'Program display name',
    })
    name!: string;

    @ApiProperty({
        example: 40,
        description: 'Temperature in °C',
    })
    temperature!: number;

    @ApiProperty({
        example: 1000,
        description: 'Spin speed in RPM',
    })
    speed!: number;

    @ApiProperty({
        example: 45,
        description: 'Duration in minutes',
    })
    duration!: number;

    @ApiProperty({
        type: [String],
        example: ['machine-uuid-1', 'machine-uuid-2'],
        description: 'Machines compatible with this program',
    })
    machineIds!: string[];

    @ApiProperty({
        type: [String],
        example: ['status-uuid-1'],
        description: 'MachineStatus entries currently using this program',
    })
    machineStatusIds!: string[];
}
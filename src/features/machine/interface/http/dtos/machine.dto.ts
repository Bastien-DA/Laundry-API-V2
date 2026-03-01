import { ApiProperty } from '@nestjs/swagger';
import { MachineType, MachineStatusEnum } from '@prisma/client';

export class MachineDto {

    @ApiProperty({
        example: 'c1a7d3e2-4b89-4f1b-9c7e-6a2d8f3e1b90',
        description: 'Unique identifier of the machine',
    })
    id!: string;

    @ApiProperty({
        example: 'Washer 01',
        description: 'Display name of the machine',
    })
    name!: string;

    @ApiProperty({
        enum: MachineType,
        example: MachineType.WASHER,
        description: 'Type of machine',
    })
    type!: MachineType;

    @ApiProperty({
        example: '4.50',
        description: 'Price stored as string (Decimal)',
    })
    price!: string;

    @ApiProperty({
        example: 'laundry-uuid',
        description: 'Laundry owning this machine',
    })
    laundryId!: string;

    @ApiProperty({
        nullable: true,
        example: 'person-uuid',
        description: 'Assigned technician (0..1)',
    })
    personId!: string | null;

    @ApiProperty({
        nullable: true,
        example: 'machine-status-uuid',
        description: 'MachineStatus id (1–1 optional)',
    })
    machineStatusId!: string | null;

    @ApiProperty({
        enum: MachineStatusEnum,
        nullable: true,
        example: MachineStatusEnum.AVAILABLE,
        description: 'Current machine status',
    })
    status!: MachineStatusEnum | null;

    @ApiProperty({
        nullable: true,
        example: 'program-uuid',
        description: 'Current running program (if any)',
    })
    currentProgramId!: string | null;

    @ApiProperty({
        type: [String],
        example: ['program-uuid-1', 'program-uuid-2'],
        description: 'Compatible programs',
    })
    programIds!: string[];
}
import { ApiProperty } from '@nestjs/swagger';

export class LaundryDto {

    @ApiProperty({
        example: 'a3f1c7d2-6b2e-4b89-9c7e-1f5a8d3e2b44',
        description: 'Unique identifier of the laundry',
    })
    id!: string;

    @ApiProperty({
        example: 'Laverie République',
    })
    name!: string;

    @ApiProperty({
        example: '08:00-20:00',
    })
    hours!: string;

    @ApiProperty({
        example: '10 Rue République, Paris',
    })
    address!: string;

    @ApiProperty({
        example: '48.8566000',
        description: 'Latitude stored as string (Decimal)',
    })
    latitude!: string;

    @ApiProperty({
        example: '2.3522000',
        description: 'Longitude stored as string (Decimal)',
    })
    longitude!: string;

    @ApiProperty({
        example: 1709136000000,
        description: 'Creation timestamp in milliseconds',
    })
    createdAt!: number;

    @ApiProperty({
        example: 'person-uuid',
        description: 'Owner person id',
    })
    personId!: string;

    @ApiProperty({
        example: ['machine-uuid-1', 'machine-uuid-2'],
        description: 'List of machine ids attached to the laundry',
    })
    machineIds!: string[];
}
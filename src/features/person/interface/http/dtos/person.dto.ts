import { ApiProperty } from '@nestjs/swagger';
import { PersonType } from '@prisma/client';

export class PersonDto {

    @ApiProperty({
        example: 'b8f7c3d2-4a9e-4c1f-8f1b-7e6c3a2d1f90',
        description: 'Unique identifier of the person',
    })
    id!: string;

    @ApiProperty({
        example: 'JohnDoe',
        description: 'Public username',
    })
    username!: string;

    @ApiProperty({
        enum: PersonType,
        example: PersonType.ADMIN,
        description: 'Role of the person',
    })
    personType!: PersonType;

    @ApiProperty({
        type: [String],
        example: ['laundry-uuid-1'],
        description: 'IDs of laundries owned by this person',
    })
    laundryIds!: string[];

    @ApiProperty({
        type: [String],
        example: ['machine-uuid-1'],
        description: 'IDs of machines assigned to this person',
    })
    machineIds!: string[];

    @ApiProperty({
        nullable: true,
        example: 'user-uuid',
        description: 'Linked user account (0..1)',
    })
    userId!: string | null;
}
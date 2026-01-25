import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateLaundryDto {
    @IsString()
    @MaxLength(50)
    @ApiProperty({ example: 'Laundry Center' })
    name!: string;

    @IsString()
    @MaxLength(100)
    @ApiProperty({ example: 'Mon-Fri: 8:00-20:00, Sat-Sun: 9:00-18:00' })
    hours!: string;

    @IsString()
    @MaxLength(200)
    @ApiProperty({ example: '10 Rue de Paris, 75000 Paris' })
    address!: string;

    @IsNumber()
    @ApiProperty({ example: 48.8566 })
    latitude!: number;

    @IsNumber()
    @ApiProperty({ example: 2.3522 })
    longitude!: number;
}

import { IsArray, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateLaundryDto {
    @ApiProperty()
    @IsString()
    @MaxLength(50)
    name!: string;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    hours!: string;

    @ApiProperty()
    @IsString()
    @MaxLength(200)
    address!: string;

    @ApiProperty()
    // ✅ Decimal => string (validation simple ; tu peux renforcer avec regex)
    @IsString()
    latitude!: string;

    @ApiProperty()
    @IsString()
    longitude!: string;

    @ApiProperty()
    @IsUUID('4')
    personId!: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    machineIds?: string[];
}

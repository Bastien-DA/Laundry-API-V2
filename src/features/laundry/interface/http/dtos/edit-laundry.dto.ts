import { IsArray, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class EditLaundryDto {
    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    @MaxLength(50)
    name?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    @MaxLength(100)
    hours?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    @MaxLength(200)
    address?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    latitude?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    longitude?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsUUID('4')
    personId?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    machineIds?: string[];
}

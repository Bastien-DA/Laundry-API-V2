import { IsArray, IsInt, IsOptional, IsString, IsUUID, MaxLength, Min } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class EditProgramDto {
    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    @MaxLength(50)
    name?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsInt()
    @Min(0)
    temperature?: number;

    @ApiProperty({required: false})
    @IsOptional()
    @IsInt()
    @Min(0)
    speed?: number;

    @ApiProperty({required: false})
    @IsOptional()
    @IsInt()
    @Min(1)
    duration?: number;

    @ApiProperty({required: false})
    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    machineIds?: string[];
}

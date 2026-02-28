import { IsArray, IsInt, IsOptional, IsString, IsUUID, MaxLength, Min } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateProgramDto {
    @ApiProperty()
    @IsString()
    @MaxLength(50)
    name!: string;

    @ApiProperty()
    @IsInt()
    @Min(0)
    temperature!: number;

    @ApiProperty()
    @IsInt()
    @Min(0)
    speed!: number;

    @ApiProperty()
    @IsInt()
    @Min(1)
    duration!: number;

    @ApiProperty({required: false})
    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    machineIds?: string[];
}

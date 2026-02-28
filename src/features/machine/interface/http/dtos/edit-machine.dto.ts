import { MachineType } from '@prisma/client';
import { IsArray, IsEnum, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class EditMachineDto {
    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    @MaxLength(50)
    name?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsEnum(MachineType)
    type?: MachineType;

    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    price?: string;

    @ApiProperty({required: false})
    // undefined => no change, null => disconnect
    @IsOptional()
    @IsUUID('4')
    personId?: string | null;

    @ApiProperty({required: false})
    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    programIds?: string[];
}

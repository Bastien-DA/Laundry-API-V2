import { MachineType } from '@prisma/client';
import { IsArray, IsEnum, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateMachineDto {
    @ApiProperty()
    @IsString()
    @MaxLength(50)
    name!: string;

    @ApiProperty()
    @IsEnum(MachineType)
    type!: MachineType;

    @ApiProperty()
    // Decimal -> string
    @IsString()
    price!: string;

    @ApiProperty()
    @IsUUID('4')
    laundryId!: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsUUID('4')
    personId?: string | null;

    @ApiProperty({required: false})
    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    programIds?: string[];
}

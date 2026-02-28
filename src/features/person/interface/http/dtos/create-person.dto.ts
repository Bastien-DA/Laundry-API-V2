import { IsArray, IsEnum, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { PersonType } from '@prisma/client';
import {ApiProperty} from "@nestjs/swagger";

export class CreatePersonDto {
    @ApiProperty()
    @IsString()
    @MaxLength(50)
    username!: string;

    @ApiProperty()
    @IsEnum(PersonType) // ✅ validation enum
    personType!: PersonType;

    @ApiProperty({required: false})
    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    laundryIds?: string[];

    @ApiProperty({required: false})
    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    machineIds?: string[];

    @ApiProperty({required: false})
    @IsOptional()
    @IsUUID('4')
    userId?: string;
}

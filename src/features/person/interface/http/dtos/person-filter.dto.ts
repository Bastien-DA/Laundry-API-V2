import { Transform } from 'class-transformer';
import {IsBoolean, IsEnum, IsOptional, IsString, IsUUID} from 'class-validator';
import {PersonType} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";

export class PersonFilterDto {
    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    usernameContains?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsEnum(PersonType) // ✅ validation enum
    personType?: PersonType;

    @ApiProperty({required: false})
    @IsOptional()
    @IsUUID('4')
    laundryId?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsUUID('4')
    machineId?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @Transform(({ value }) => (value === 'true' ? true : value === 'false' ? false : value))
    @IsBoolean()
    hasUser?: boolean;

    @ApiProperty({required: false})
    @IsOptional()
    @IsUUID('4')
    userId?: string;
}

import { Transform } from 'class-transformer';
import {IsBoolean, IsEnum, IsOptional, IsString, IsUUID} from 'class-validator';
import {PersonType} from "@prisma/client";

export class PersonFilterDto {
    @IsOptional()
    @IsString()
    usernameContains?: string;

    @IsOptional()
    @IsEnum(PersonType) // ✅ validation enum
    personType?: PersonType;

    @IsOptional()
    @IsUUID('4')
    laundryId?: string;

    @IsOptional()
    @IsUUID('4')
    machineId?: string;

    @IsOptional()
    @Transform(({ value }) => (value === 'true' ? true : value === 'false' ? false : value))
    @IsBoolean()
    hasUser?: boolean;

    @IsOptional()
    @IsUUID('4')
    userId?: string;
}

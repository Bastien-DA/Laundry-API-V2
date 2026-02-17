import { IsArray, IsEnum, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { PersonType } from '@prisma/client';

export class CreatePersonDto {
    @IsString()
    @MaxLength(50)
    username!: string;

    @IsEnum(PersonType) // ✅ validation enum
    personType!: PersonType;

    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    laundryIds?: string[];

    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    machineIds?: string[];

    @IsOptional()
    @IsUUID('4')
    userId?: string;
}

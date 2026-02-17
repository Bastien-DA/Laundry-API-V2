import { MachineType } from '@prisma/client';
import { IsArray, IsEnum, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateMachineDto {
    @IsString()
    @MaxLength(50)
    name!: string;

    @IsEnum(MachineType)
    type!: MachineType;

    // Decimal -> string
    @IsString()
    price!: string;

    @IsUUID('4')
    laundryId!: string;

    @IsOptional()
    @IsUUID('4')
    personId?: string | null;

    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    programIds?: string[];
}

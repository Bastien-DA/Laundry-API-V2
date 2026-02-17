import { MachineType } from '@prisma/client';
import { IsArray, IsEnum, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class EditMachineDto {
    @IsOptional()
    @IsString()
    @MaxLength(50)
    name?: string;

    @IsOptional()
    @IsEnum(MachineType)
    type?: MachineType;

    @IsOptional()
    @IsString()
    price?: string;

    // undefined => no change, null => disconnect
    @IsOptional()
    @IsUUID('4')
    personId?: string | null;

    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    programIds?: string[];
}

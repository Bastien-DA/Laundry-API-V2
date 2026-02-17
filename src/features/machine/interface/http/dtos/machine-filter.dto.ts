import { MachineType } from '@prisma/client';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';

export class MachineFilterDto {
    @IsOptional()
    @IsUUID('4')
    laundryId?: string;

    @IsOptional()
    @IsUUID('4')
    personId?: string;

    @IsOptional()
    @IsEnum(MachineType)
    type?: MachineType;

    @IsOptional()
    @IsUUID('4')
    programId?: string;
}

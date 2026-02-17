import { IsOptional, IsString, IsUUID } from 'class-validator';

export class ProgramFilterDto {
    @IsOptional()
    @IsString()
    nameContains?: string;

    @IsOptional()
    @IsUUID('4')
    machineId?: string;
}

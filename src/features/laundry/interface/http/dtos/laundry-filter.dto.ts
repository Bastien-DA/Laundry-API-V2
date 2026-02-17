import { IsOptional, IsString, IsUUID } from 'class-validator';

export class LaundryFilterDto {
    @IsOptional()
    @IsString()
    nameContains?: string;

    @IsOptional()
    @IsUUID('4')
    personId?: string;

    @IsOptional()
    @IsUUID('4')
    machineId?: string;
}

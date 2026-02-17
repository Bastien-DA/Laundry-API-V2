import { IsArray, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class EditLaundryDto {
    @IsOptional()
    @IsString()
    @MaxLength(50)
    name?: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    hours?: string;

    @IsOptional()
    @IsString()
    @MaxLength(200)
    address?: string;

    @IsOptional()
    @IsString()
    latitude?: string;

    @IsOptional()
    @IsString()
    longitude?: string;

    @IsOptional()
    @IsUUID('4')
    personId?: string;

    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    machineIds?: string[];
}

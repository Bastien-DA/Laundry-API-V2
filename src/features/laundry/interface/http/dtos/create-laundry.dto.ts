import { IsArray, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateLaundryDto {
    @IsString()
    @MaxLength(50)
    name!: string;

    @IsString()
    @MaxLength(100)
    hours!: string;

    @IsString()
    @MaxLength(200)
    address!: string;

    // ✅ Decimal => string (validation simple ; tu peux renforcer avec regex)
    @IsString()
    latitude!: string;

    @IsString()
    longitude!: string;

    @IsUUID('4')
    personId!: string;

    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    machineIds?: string[];
}

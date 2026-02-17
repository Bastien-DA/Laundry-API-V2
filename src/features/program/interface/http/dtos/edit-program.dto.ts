import { IsArray, IsInt, IsOptional, IsString, IsUUID, MaxLength, Min } from 'class-validator';

export class EditProgramDto {
    @IsOptional()
    @IsString()
    @MaxLength(50)
    name?: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    temperature?: number;

    @IsOptional()
    @IsInt()
    @Min(0)
    speed?: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    duration?: number;

    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    machineIds?: string[];
}

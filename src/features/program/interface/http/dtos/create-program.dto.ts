import { IsArray, IsInt, IsOptional, IsString, IsUUID, MaxLength, Min } from 'class-validator';

export class CreateProgramDto {
    @IsString()
    @MaxLength(50)
    name!: string;

    @IsInt()
    @Min(0)
    temperature!: number;

    @IsInt()
    @Min(0)
    speed!: number;

    @IsInt()
    @Min(1)
    duration!: number;

    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    machineIds?: string[];
}

import { IsOptional, IsString, IsUUID } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class ProgramFilterDto {
    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    nameContains?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsUUID('4')
    machineId?: string;
}

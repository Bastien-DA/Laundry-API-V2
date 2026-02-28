import { MachineType } from '@prisma/client';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class MachineFilterDto {
    @ApiProperty({required: false})
    @IsOptional()
    @IsUUID('4')
    laundryId?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsUUID('4')
    personId?: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsEnum(MachineType)
    type?: MachineType;

    @ApiProperty({required: false})
    @IsOptional()
    @IsUUID('4')
    programId?: string;
}

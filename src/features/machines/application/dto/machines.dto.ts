import { ApiProperty } from '@nestjs/swagger';
import { MachineStatusEnum, MachineType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { MachineStatusDto } from './machinesStatus.dto';

export class ProgramDto {
  @ApiProperty({ description: 'The unique identifier of the program' })
  @IsUUID()
  @IsNotEmpty()
  id!: string;

  @ApiProperty({ description: 'The name of the program' })
  @IsString()
  @IsNotEmpty()
  name!: string;
}

export class LaundryDto {
  @ApiProperty({ description: 'The unique identifier of the laundry' })
  @IsUUID()
  @IsNotEmpty()
  id!: string;

  @ApiProperty({ description: 'The name of the laundry' })
  @IsString()
  @IsNotEmpty()
  name!: string;
}

export class MachineDto {
  @ApiProperty({ description: 'Unique identifier of the laundry' })
  @IsUUID()
  @IsNotEmpty()
  id!: string;

  @ApiProperty({ description: 'The name of the machine', maxLength: 50 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name!: string;

  @ApiProperty({ description: 'The type of the machine', enum: MachineType })
  @IsNotEmpty()
  @IsEnum(MachineType)
  type!: MachineType;

  @ApiProperty({ description: 'The price of using the machine' })
  @IsNotEmpty()
  @IsNumber()
  price!: number;

  @ApiProperty({ description: 'The current status of the machine' })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MachineStatusDto)
  machineStatus!: MachineStatusDto;

  @ApiProperty({ description: 'The list of programs supported by the machine', type: [ProgramDto] })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProgramDto)
  programs!: ProgramDto[];

  @ApiProperty({ description: 'The laundry that contains this machine', required: false, type: () => LaundryDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => LaundryDto)
  laundry?: LaundryDto | null;

  @ApiProperty({ description: 'The laundry that contains this machine uuid' })
  @IsNotEmpty()
  @IsUUID()
  laundryId!: string;
}

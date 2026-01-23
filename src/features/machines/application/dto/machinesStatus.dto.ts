import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { MachineStatusEnum } from '@prisma/client';

export class MachineStatusDto {
  @ApiProperty({ description: 'The status of the machine', enum: MachineStatusEnum })
  @IsEnum(MachineStatusEnum)
  @IsNotEmpty()
  status!: MachineStatusEnum;
}
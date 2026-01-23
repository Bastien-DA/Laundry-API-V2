import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { MachineDto } from '../../../machines/application/dto/machines.dto';

export class ProgramDto {
  @ApiProperty({ description: 'The unique identifier of the program' })
  @IsUUID()
  @IsNotEmpty()
  id!: string;

  @ApiProperty({ description: 'The name of the program', maxLength: 50 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name!: string;

  @ApiProperty({ description: 'The temperature setting for the program' })
  @IsInt()
  @IsNotEmpty()
  temperature!: number;

  @ApiProperty({ description: 'The speed setting for the program' })
  @IsInt()
  @IsNotEmpty()
  speed!: number;

  @ApiProperty({ description: 'The duration of the program in minutes' })
  @IsInt()
  @IsNotEmpty()
  duration!: number;

  @ApiProperty({
    description: 'The list of machines that support this program',
    type: () => [MachineDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MachineDto)
  machines!: MachineDto[];
}

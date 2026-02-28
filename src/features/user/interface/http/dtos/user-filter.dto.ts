import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class UserFilterDto {
  @ApiProperty({required: false})
  @IsOptional()
  @IsString()
  emailContains?: string;

  @ApiProperty({required: false})
  @IsOptional()
  @Transform(({ value }): boolean =>
    value === 'true' ? true : value === 'false' ? false : value,
  )
  @IsBoolean()
  hasPerson?: boolean;

  @ApiProperty({required: false})
  @IsOptional()
  @IsUUID('4')
  personId?: string;
}

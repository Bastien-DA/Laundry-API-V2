import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class UserFilterDto {
  @IsOptional()
  @IsString()
  emailContains?: string;

  @IsOptional()
  @Transform(({ value }): boolean =>
    value === 'true' ? true : value === 'false' ? false : value,
  )
  @IsBoolean()
  hasPerson?: boolean;

  @IsOptional()
  @IsUUID('4')
  personId?: string;
}

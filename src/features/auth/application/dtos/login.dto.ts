import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @ApiProperty({ example: '123' })
  userId!: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'a@b.com', required: false })
  email?: string;
}

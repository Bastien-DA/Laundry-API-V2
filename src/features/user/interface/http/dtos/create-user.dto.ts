import { IsEmail, IsOptional, IsUUID, MaxLength } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  @MaxLength(100)
  email!: string;

  @ApiProperty({required: false})
  @IsOptional()
  @IsUUID('4')
  personId?: string;
}

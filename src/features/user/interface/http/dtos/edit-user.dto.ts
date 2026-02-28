import { IsEmail, IsOptional, IsUUID, MaxLength } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class EditUserDto {
  @ApiProperty({required: false})
  @IsOptional()
  @IsEmail()
  @MaxLength(100)
  email?: string;

  @ApiProperty({required: false})
  // ✅ pour clear la relation, ton client peut envoyer null
  @IsOptional()
  @IsUUID('4')
  personId?: string | null;
}

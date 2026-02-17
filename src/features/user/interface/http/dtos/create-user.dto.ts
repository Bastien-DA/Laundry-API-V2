import { IsEmail, IsOptional, IsUUID, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @MaxLength(100)
  email!: string;

  @IsOptional()
  @IsUUID('4')
  personId?: string;
}

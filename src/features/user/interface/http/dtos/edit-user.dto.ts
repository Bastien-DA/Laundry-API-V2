import { IsEmail, IsOptional, IsUUID, MaxLength } from 'class-validator';

export class EditUserDto {
  @IsOptional()
  @IsEmail()
  @MaxLength(100)
  email?: string;

  // ✅ pour clear la relation, ton client peut envoyer null
  @IsOptional()
  @IsUUID('4')
  personId?: string | null;
}

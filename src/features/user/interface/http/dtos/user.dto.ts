import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'uuid' })
  id!: string;

  @ApiProperty({ example: 'customer@dev.local' })
  email!: string;

  @ApiProperty({ example: 1709136000000, description: 'ms timestamp' })
  createdAt!: number;

  @ApiProperty({ nullable: true, example: 'uuid' })
  personId!: string | null;
}
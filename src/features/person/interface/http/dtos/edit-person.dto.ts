import {IsArray, IsEnum, IsOptional, IsString, IsUUID, MaxLength} from 'class-validator';
import {PersonType} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";

export class EditPersonDto {
    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    @MaxLength(50)
    username?: string;

    @ApiProperty()
    @IsOptional()
    @IsEnum(PersonType) // ✅ validation enum
    personType!: PersonType;

    @ApiProperty({required: false})
    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    laundryIds?: string[];

    @ApiProperty({required: false})
    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    machineIds?: string[];

    @ApiProperty({required: false})
    // null => disconnect
    @IsOptional()
    @IsUUID('4')
    userId?: string | null;
}

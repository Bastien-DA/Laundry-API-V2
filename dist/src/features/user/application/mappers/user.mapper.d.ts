import { UserEntity } from '@features/user/domain/entities/user.entity';
import { UserDto } from '@features/user/interface/http/dtos/user.dto';
import { CreateUserDto } from '@features/user/interface/http/dtos/create-user.dto';
import { EditUserDto } from '@features/user/interface/http/dtos/edit-user.dto';
import { CreateUserCommand, EditUserCommand } from '@features/user/domain/ports/user.repository.port';
import { AbstractMapper } from '@shared/application/mappers/abstract.mapper';
export declare class UserMapper implements AbstractMapper<UserEntity, UserDto, CreateUserDto, EditUserDto> {
    toDto(e: UserEntity): UserDto;
    fromCreateDto(dto: CreateUserDto): CreateUserCommand;
    fromEditDto(dto: EditUserDto): EditUserCommand;
}

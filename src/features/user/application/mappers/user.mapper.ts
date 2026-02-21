import { UserEntity } from '@features/user/domain/entities/user.entity';
import { UserDto } from '@features/user/interface/http/dtos/user.dto';
import { CreateUserDto } from '@features/user/interface/http/dtos/create-user.dto';
import { EditUserDto } from '@features/user/interface/http/dtos/edit-user.dto';
import {
  CreateUserCommand,
  EditUserCommand,
} from '@features/user/domain/ports/user.repository.port';
import { AbstractMapper } from '@shared/application/mappers/abstract.mapper';

export class UserMapper implements AbstractMapper<
  UserEntity,
  UserDto,
  CreateUserDto,
  EditUserDto
> {
  toDto(e: UserEntity): UserDto {
    return {
      id: e.id,
      email: e.email,
      createdAt: e.createdAt.getTime(),
      personId: e.personId,
    };
  }

  fromCreateDto(dto: CreateUserDto): CreateUserCommand {
    return {
      email: dto.email,
      passwordHash: '',
      personId: dto.personId ?? null,
    };
  }

  fromEditDto(dto: EditUserDto): EditUserCommand {
    return {
      email: dto.email,
      // si undefined => pas de changement
      // si null => disconnect
      // si string => connect
      personId: dto.personId,
    };
  }
}

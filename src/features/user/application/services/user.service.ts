import {Inject, Injectable} from '@nestjs/common';
import { UserMapper } from '@features/user/application/mappers/user.mapper';
import { AbstractService } from '@shared/application/services/abstract.service';
import { UserEntity } from '@features/user/domain/entities/user.entity';
import { UserDto } from '@features/user/interface/http/dtos/user.dto';
import { CreateUserDto } from '@features/user/interface/http/dtos/create-user.dto';
import { EditUserDto } from '@features/user/interface/http/dtos/edit-user.dto';
import { UserFilterDto } from '@features/user/interface/http/dtos/user-filter.dto';
import { PrismaUserRepository } from '@features/user/infrastructure/prisma/user.prisma-repository';
import {UserRepository} from "@features/user/domain/ports/user.repository.port";

@Injectable()
export class UserService extends AbstractService<
  UserEntity,
  string,
  UserDto,
  CreateUserDto,
  EditUserDto,
  UserFilterDto
> {
  constructor(@Inject('UserRepository') repo: UserRepository, mapper: UserMapper) {
    super(repo, mapper);
  }
}

import { Injectable } from '@nestjs/common';
import { UserMapper } from '@features/user/application/mappers/user.mapper';
import { AbstractService } from '@shared/application/services/abstract.service';
import { UserEntity } from '@features/user/domain/entities/user.entity';
import { UserDto } from '@features/user/interface/http/dtos/user.dto';
import { CreateUserDto } from '@features/user/interface/http/dtos/create-user.dto';
import { EditUserDto } from '@features/user/interface/http/dtos/edit-user.dto';
import { UserFilterDto } from '@features/user/interface/http/dtos/user-filter.dto';
import { PrismaUserRepository } from '@features/user/infrastructure/prisma/user.prisma-repository';

@Injectable()
export class UserService extends AbstractService<
  UserEntity,
  string,
  UserDto,
  CreateUserDto,
  EditUserDto,
  UserFilterDto
> {
  constructor(repo: PrismaUserRepository, mapper: UserMapper) {
    super(repo, mapper);
  }
}

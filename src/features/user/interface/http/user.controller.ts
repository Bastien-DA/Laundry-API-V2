import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import {
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { UserService } from '@features/user/application/services/user.service';
import { UserDto } from '@features/user/interface/http/dtos/user.dto';
import { EditUserDto } from '@features/user/interface/http/dtos/edit-user.dto';
import { UserFilterDto } from '@features/user/interface/http/dtos/user-filter.dto';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @ApiOperation({ summary: 'Get a user by id' })
  @ApiParam({ name: 'id', type: String })
  @ApiOkResponse({ type: UserDto })
  @Get(':id')
  getById(@Param('id') id: string): Promise<UserDto> {
    return this.service.getById(id);
  }

  @ApiOperation({ summary: 'List users (no pagination)' })
  @ApiOkResponse({ type: UserDto, isArray: true })
  @Get()
  list(@Query() filter: UserFilterDto): Promise<UserDto[]> {
    return this.service.list({ filter });
  }

  @ApiOperation({ summary: 'Edit a user' })
  @ApiParam({ name: 'id', type: String })
  @ApiOkResponse({ type: UserDto })
  @Patch(':id')
  edit(@Param('id') id: string, @Body() dto: EditUserDto): Promise<UserDto> {
    return this.service.edit(id, dto);
  }

  @ApiOperation({ summary: 'Delete a user' })
  @ApiParam({ name: 'id', type: String })
  @ApiNoContentResponse()
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
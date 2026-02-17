import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { UserService } from '@features/user/application/services/user.service';
import { EditUserDto } from '@features/user/interface/http/dtos/edit-user.dto';
import { UserFilterDto } from '@features/user/interface/http/dtos/user-filter.dto';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.getById(id);
  }

  @Get()
  list(@Query() filter: UserFilterDto) {
    return this.service.list({ filter });
  }

  @Patch(':id')
  edit(@Param('id') id: string, @Body() dto: EditUserDto) {
    return this.service.edit(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

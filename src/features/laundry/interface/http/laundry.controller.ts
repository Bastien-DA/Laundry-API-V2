import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { LaundryService } from '@features/laundry/application/services/laundry.service';
import { CreateLaundryDto } from './dtos/create-laundry.dto';
import { EditLaundryDto } from './dtos/edit-laundry.dto';
import { LaundryFilterDto } from './dtos/laundry-filter.dto';
import {Roles} from "@features/auth/infrastructure/security/roles.decorator";

@Controller('laundries')
export class LaundryController {
    constructor(private readonly service: LaundryService) {}

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.service.getById(id);
    }

    @Get()
    list(@Query() filter: LaundryFilterDto) {
        return this.service.list({ filter });
    }

    @Roles('ADMIN', 'TECHNICIAN')
    @Post()
    create(@Body() dto: CreateLaundryDto) {
        return this.service.create(dto);
    }

    @Roles('ADMIN', 'TECHNICIAN')
    @Patch(':id')
    edit(@Param('id') id: string, @Body() dto: EditLaundryDto) {
        return this.service.edit(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(id);
    }
}

import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { LaundryService } from '@features/laundry/application/services/laundry.service';
import { CreateLaundryDto } from './dtos/create-laundry.dto';
import { EditLaundryDto } from './dtos/edit-laundry.dto';
import { LaundryFilterDto } from './dtos/laundry-filter.dto';
import {Roles} from "@features/auth/infrastructure/security/roles.decorator";
import {LaundryDto} from "@features/laundry/interface/http/dtos/laundry.dto";
import {ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiOperation, ApiParam} from "@nestjs/swagger";

@Controller('laundries')
export class LaundryController {
    constructor(private readonly service: LaundryService) {}

    @ApiOperation({ summary: 'Get a laundry by id' })
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({ type: LaundryDto })
    @Get(':id')
    getById(@Param('id') id: string): Promise<LaundryDto> {
        return this.service.getById(id);
    }

    @ApiOperation({ summary: 'List laundries (no pagination)' })
    @ApiOkResponse({ type: LaundryDto, isArray: true })
    @Get()
    list(@Query() filter: LaundryFilterDto): Promise<LaundryDto[]> {
        return this.service.list({ filter });
    }

    @ApiOperation({ summary: 'Create a laundry' })
    @ApiCreatedResponse({ type: LaundryDto })
    @Roles('ADMIN', 'TECHNICIAN')
    @Post()
    create(@Body() dto: CreateLaundryDto): Promise<LaundryDto> {
        return this.service.create(dto);
    }

    @ApiOperation({ summary: 'Edit a laundry' })
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({ type: LaundryDto })
    @Roles('ADMIN', 'TECHNICIAN')
    @Patch(':id')
    edit(@Param('id') id: string, @Body() dto: EditLaundryDto): Promise<LaundryDto> {
        return this.service.edit(id, dto);
    }

    @ApiOperation({ summary: 'Delete a laundry' })
    @ApiParam({ name: 'id', type: String })
    @ApiNoContentResponse()
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.service.remove(id);
    }
}

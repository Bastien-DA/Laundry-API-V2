import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';

import { EditProgramDto } from '@features/program/interface/http/dtos/edit-program.dto';
import { CreateProgramDto } from '@features/program/interface/http/dtos/create-program.dto';
import { ProgramFilterDto } from '@features/program/interface/http/dtos/program-filter.dto';
import { ProgramDto } from '@features/program/interface/http/dtos/program.dto';
import { ProgramService } from '@features/program/application/services/program.service';
import { Roles } from '@features/auth/infrastructure/security/roles.decorator';

@Controller('programs')
export class ProgramController {
    constructor(private readonly service: ProgramService) {}

    @ApiOperation({ summary: 'Get a program by id' })
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({ type: ProgramDto })
    @Get(':id')
    getById(@Param('id') id: string): Promise<ProgramDto> {
        return this.service.getById(id);
    }

    @ApiOperation({ summary: 'List programs (no pagination)' })
    @ApiOkResponse({ type: ProgramDto, isArray: true })
    @Get()
    list(@Query() filter: ProgramFilterDto): Promise<ProgramDto[]> {
        return this.service.list({ filter });
    }

    @ApiOperation({ summary: 'Create a program' })
    @ApiCreatedResponse({ type: ProgramDto })
    @ApiBearerAuth()
    @Roles('ADMIN', 'TECHNICIAN')
    @Post()
    create(@Body() dto: CreateProgramDto): Promise<ProgramDto> {
        return this.service.create(dto);
    }

    @ApiOperation({ summary: 'Edit a program' })
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({ type: ProgramDto })
    @ApiBearerAuth()
    @Roles('ADMIN', 'TECHNICIAN')
    @Patch(':id')
    edit(
        @Param('id') id: string,
        @Body() dto: EditProgramDto,
    ): Promise<ProgramDto> {
        return this.service.edit(id, dto);
    }

    @ApiOperation({ summary: 'Delete a program' })
    @ApiParam({ name: 'id', type: String })
    @ApiNoContentResponse()
    @ApiBearerAuth()
    @Roles('ADMIN', 'TECHNICIAN')
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.service.remove(id);
    }
}
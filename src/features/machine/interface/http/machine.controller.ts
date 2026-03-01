import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';

import { MachineService } from '@features/machine/application/services/machine.service';
import { CreateMachineDto } from './dtos/create-machine.dto';
import { EditMachineDto } from './dtos/edit-machine.dto';
import { MachineFilterDto } from './dtos/machine-filter.dto';
import { MachineDto } from './dtos/machine.dto';
import { Roles } from '@features/auth/infrastructure/security/roles.decorator';

@Controller('machines')
export class MachineController {
    constructor(private readonly service: MachineService) {}

    // ---------- CRUD ----------

    @ApiOperation({ summary: 'Get a machine by id' })
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({ type: MachineDto })
    @Get(':id')
    getById(@Param('id') id: string): Promise<MachineDto> {
        return this.service.getById(id);
    }

    @ApiOperation({ summary: 'List machines (no pagination)' })
    @ApiOkResponse({ type: MachineDto, isArray: true })
    @Get()
    list(@Query() filter: MachineFilterDto): Promise<MachineDto[]> {
        return this.service.list({ filter });
    }

    @ApiOperation({ summary: 'Create a machine' })
    @ApiCreatedResponse({ type: MachineDto })
    @ApiBearerAuth()
    @Roles('ADMIN', 'TECHNICIAN')
    @Post()
    create(@Body() dto: CreateMachineDto): Promise<MachineDto> {
        return this.service.create(dto);
    }

    @ApiOperation({ summary: 'Edit a machine' })
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({ type: MachineDto })
    @ApiBearerAuth()
    @Roles('ADMIN', 'TECHNICIAN')
    @Patch(':id')
    edit(@Param('id') id: string, @Body() dto: EditMachineDto): Promise<MachineDto> {
        return this.service.edit(id, dto);
    }

    @ApiOperation({ summary: 'Delete a machine' })
    @ApiParam({ name: 'id', type: String })
    @ApiNoContentResponse()
    @ApiBearerAuth()
    @Roles('ADMIN', 'TECHNICIAN')
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.service.remove(id);
    }

    // ---------- STATE MACHINE ----------

    @ApiOperation({ summary: 'Start a program on a machine' })
    @ApiParam({ name: 'id', type: String })
    @ApiParam({ name: 'programId', type: String })
    @ApiNoContentResponse()
    @ApiBearerAuth()
    @Roles('ADMIN', 'TECHNICIAN')
    @Post(':id/start/:programId')
    start(@Param('id') id: string, @Param('programId') programId: string): Promise<void> {
        return this.service.startProgram(id, programId);
    }

    @ApiOperation({ summary: 'Pause current program' })
    @ApiParam({ name: 'id', type: String })
    @ApiNoContentResponse()
    @ApiBearerAuth()
    @Roles('ADMIN', 'TECHNICIAN')
    @Post(':id/pause')
    pause(@Param('id') id: string): Promise<void> {
        return this.service.pauseProgram(id);
    }

    @ApiOperation({ summary: 'Resume paused program' })
    @ApiParam({ name: 'id', type: String })
    @ApiNoContentResponse()
    @ApiBearerAuth()
    @Roles('ADMIN', 'TECHNICIAN')
    @Post(':id/resume')
    resume(@Param('id') id: string): Promise<void> {
        return this.service.resumeProgram(id);
    }

    @ApiOperation({ summary: 'Stop program and mark machine as available' })
    @ApiParam({ name: 'id', type: String })
    @ApiNoContentResponse()
    @ApiBearerAuth()
    @Roles('ADMIN', 'TECHNICIAN')
    @Post(':id/stop')
    stop(@Param('id') id: string): Promise<void> {
        return this.service.stopProgram(id);
    }

    @ApiOperation({ summary: 'Set machine as out of order' })
    @ApiParam({ name: 'id', type: String })
    @ApiNoContentResponse()
    @ApiBearerAuth()
    @Roles('ADMIN', 'TECHNICIAN')
    @Post(':id/out-of-order')
    outOfOrder(@Param('id') id: string): Promise<void> {
        return this.service.setOutOfOrder(id);
    }

    @ApiOperation({ summary: 'Mark machine as available (from OUT_OF_ORDER)' })
    @ApiParam({ name: 'id', type: String })
    @ApiNoContentResponse()
    @ApiBearerAuth()
    @Roles('ADMIN', 'TECHNICIAN')
    @Post(':id/available')
    available(@Param('id') id: string): Promise<void> {
        return this.service.markAvailable(id);
    }
}
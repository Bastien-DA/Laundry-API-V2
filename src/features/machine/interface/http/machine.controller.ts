import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MachineService } from '@features/machine/application/services/machine.service';
import { CreateMachineDto } from './dtos/create-machine.dto';
import { EditMachineDto } from './dtos/edit-machine.dto';
import { MachineFilterDto } from './dtos/machine-filter.dto';
import {Roles} from "@features/auth/infrastructure/security/roles.decorator";

@Controller('machines')
export class MachineController {
    constructor(private readonly service: MachineService) {}

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.service.getById(id);
    }

    @Get()
    list(@Query() filter: MachineFilterDto) {
        return this.service.list({ filter });
    }

    @Roles('ADMIN', 'TECHNICIAN')
    @Post()
    create(@Body() dto: CreateMachineDto) {
        return this.service.create(dto);
    }

    @Roles('ADMIN', 'TECHNICIAN')
    @Patch(':id')
    edit(@Param('id') id: string, @Body() dto: EditMachineDto) {
        return this.service.edit(id, dto);
    }

    @Roles('ADMIN', 'TECHNICIAN')
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(id);
    }

    @Post(':id/start/:programId')
    start(@Param('id') id: string, @Param('programId') programId: string) {
        return this.service.startProgram(id, programId);
    }

    @Post(':id/pause')
    pause(@Param('id') id: string) {
        return this.service.pauseProgram(id);
    }

    @Post(':id/resume')
    resume(@Param('id') id: string) {
        return this.service.resumeProgram(id);
    }

    @Post(':id/stop')
    stop(@Param('id') id: string) {
        return this.service.stopProgram(id);
    }

    @Post(':id/out-of-order')
    outOfOrder(@Param('id') id: string) {
        return this.service.setOutOfOrder(id);
    }

    @Post(':id/available')
    available(@Param('id') id: string) {
        return this.service.markAvailable(id);
    }

}

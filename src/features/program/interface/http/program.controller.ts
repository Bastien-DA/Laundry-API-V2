import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from "@nestjs/common";
import {EditProgramDto} from "@features/program/interface/http/dtos/edit-program.dto";
import {CreateProgramDto} from "@features/program/interface/http/dtos/create-program.dto";
import {ProgramFilterDto} from "@features/program/interface/http/dtos/program-filter.dto";
import {ProgramService} from "@features/program/application/services/program.service";
import {Roles} from "@features/auth/infrastructure/security/roles.decorator";

@Controller('programs')
export class ProgramController {
    constructor(private readonly service: ProgramService) {}

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.service.getById(id);
    }

    @Get()
    list(@Query() filter: ProgramFilterDto) {
        return this.service.list({ filter });
    }

    @Roles('ADMIN', 'TECHNICIAN')
    @Post()
    create(@Body() dto: CreateProgramDto) {
        return this.service.create(dto);
    }

    @Roles('ADMIN', 'TECHNICIAN')
    @Patch(':id')
    edit(@Param('id') id: string, @Body() dto: EditProgramDto) {
        return this.service.edit(id, dto);
    }

    @Roles('ADMIN', 'TECHNICIAN')
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(id);
    }
}

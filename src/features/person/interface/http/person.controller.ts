import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PersonService } from '@features/person/application/services/person.service';
import { CreatePersonDto } from '@features/person/interface/http/dtos/create-person.dto';
import { EditPersonDto } from '@features/person/interface/http/dtos/edit-person.dto';
import { PersonFilterDto } from '@features/person/interface/http/dtos/person-filter.dto';

@Controller('persons')
export class PersonController {
    constructor(private readonly service: PersonService) {}

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.service.getById(id);
    }

    @Get()
    list(@Query() filter: PersonFilterDto) {
        return this.service.list({ filter });
    }

    @Post()
    create(@Body() dto: CreatePersonDto) {
        return this.service.create(dto);
    }

    @Patch(':id')
    edit(@Param('id') id: string, @Body() dto: EditPersonDto) {
        return this.service.edit(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(id);
    }
}

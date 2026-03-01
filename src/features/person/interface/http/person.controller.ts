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

import { PersonService } from '@features/person/application/services/person.service';
import { CreatePersonDto } from '@features/person/interface/http/dtos/create-person.dto';
import { EditPersonDto } from '@features/person/interface/http/dtos/edit-person.dto';
import { PersonFilterDto } from '@features/person/interface/http/dtos/person-filter.dto';
import { PersonDto } from '@features/person/interface/http/dtos/person.dto';

@Controller('persons')
export class PersonController {
    constructor(private readonly service: PersonService) {}

    @ApiOperation({ summary: 'Get a person by id' })
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({ type: PersonDto })
    @Get(':id')
    getById(@Param('id') id: string): Promise<PersonDto> {
        return this.service.getById(id);
    }

    @ApiOperation({ summary: 'List persons (no pagination)' })
    @ApiOkResponse({ type: PersonDto, isArray: true })
    @Get()
    list(@Query() filter: PersonFilterDto): Promise<PersonDto[]> {
        return this.service.list({ filter });
    }

    @ApiOperation({ summary: 'Create a person' })
    @ApiCreatedResponse({ type: PersonDto })
    @ApiBearerAuth()
    @Post()
    create(@Body() dto: CreatePersonDto): Promise<PersonDto> {
        return this.service.create(dto);
    }

    @ApiOperation({ summary: 'Edit a person' })
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({ type: PersonDto })
    @ApiBearerAuth()
    @Patch(':id')
    edit(
        @Param('id') id: string,
        @Body() dto: EditPersonDto,
    ): Promise<PersonDto> {
        return this.service.edit(id, dto);
    }

    @ApiOperation({ summary: 'Delete a person' })
    @ApiParam({ name: 'id', type: String })
    @ApiNoContentResponse()
    @ApiBearerAuth()
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.service.remove(id);
    }
}
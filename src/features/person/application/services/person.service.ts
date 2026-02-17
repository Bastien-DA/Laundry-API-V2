import {Inject, Injectable} from '@nestjs/common';
import { AbstractService } from '@shared/application/services/abstract.service';
import { PersonEntity } from '@features/person/domain/entities/person.entity';
import { PersonDto } from '@features/person/interface/http/dtos/person.dto';
import { CreatePersonDto } from '@features/person/interface/http/dtos/create-person.dto';
import { EditPersonDto } from '@features/person/interface/http/dtos/edit-person.dto';
import { PersonFilterDto } from '@features/person/interface/http/dtos/person-filter.dto';
import { PersonMapper } from '@features/person/application/mappers/person.mapper';
import {PersonRepository} from "@features/person/domain/ports/person.repository.port";

@Injectable()
export class PersonService extends AbstractService<
    PersonEntity,
    string,
    PersonDto,
    CreatePersonDto,
    EditPersonDto,
    PersonFilterDto
> {
    constructor(@Inject('PersonRepository') repo: PersonRepository, mapper: PersonMapper) {
        super(repo as any, mapper);
    }
}

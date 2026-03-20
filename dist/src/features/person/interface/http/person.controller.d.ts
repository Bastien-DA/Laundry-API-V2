import { PersonService } from '@features/person/application/services/person.service';
import { CreatePersonDto } from '@features/person/interface/http/dtos/create-person.dto';
import { EditPersonDto } from '@features/person/interface/http/dtos/edit-person.dto';
import { PersonFilterDto } from '@features/person/interface/http/dtos/person-filter.dto';
import { PersonDto } from '@features/person/interface/http/dtos/person.dto';
export declare class PersonController {
    private readonly service;
    constructor(service: PersonService);
    getById(id: string): Promise<PersonDto>;
    list(filter: PersonFilterDto): Promise<PersonDto[]>;
    create(dto: CreatePersonDto): Promise<PersonDto>;
    edit(id: string, dto: EditPersonDto): Promise<PersonDto>;
    remove(id: string): Promise<void>;
}

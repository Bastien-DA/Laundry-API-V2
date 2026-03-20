import { AbstractMapper } from '@shared/application/mappers/abstract.mapper';
import { PersonEntity } from '@features/person/domain/entities/person.entity';
import { PersonDto } from '@features/person/interface/http/dtos/person.dto';
import { CreatePersonDto } from '@features/person/interface/http/dtos/create-person.dto';
import { EditPersonDto } from '@features/person/interface/http/dtos/edit-person.dto';
import { CreatePersonCommand, EditPersonCommand } from '@features/person/domain/ports/person.repository.port';
export declare class PersonMapper implements AbstractMapper<PersonEntity, PersonDto, CreatePersonDto, EditPersonDto> {
    toDto(e: PersonEntity): PersonDto;
    fromCreateDto(dto: CreatePersonDto): CreatePersonCommand;
    fromEditDto(dto: EditPersonDto): EditPersonCommand;
}

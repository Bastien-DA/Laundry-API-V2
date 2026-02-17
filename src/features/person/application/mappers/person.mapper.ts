import { AbstractMapper } from '@shared/application/mappers/abstract.mapper';
import { PersonEntity } from '@features/person/domain/entities/person.entity';
import { PersonDto } from '@features/person/interface/http/dtos/person.dto';
import { CreatePersonDto } from '@features/person/interface/http/dtos/create-person.dto';
import { EditPersonDto } from '@features/person/interface/http/dtos/edit-person.dto';
import { CreatePersonCommand, EditPersonCommand } from '@features/person/domain/ports/person.repository.port';

export class PersonMapper implements AbstractMapper<PersonEntity, PersonDto, CreatePersonDto, EditPersonDto> {
    toDto(e: PersonEntity): PersonDto {
        return {
            id: e.id,
            username: e.username,
            personType: e.personType,
            laundryIds: e.laundryIds,
            machineIds: e.machineIds,
            userId: e.userId,
        };
    }

    fromCreateDto(dto: CreatePersonDto): CreatePersonCommand {
        return {
            username: dto.username,
            personType: dto.personType,
            laundryIds: dto.laundryIds ?? [],
            machineIds: dto.machineIds ?? [],
            userId: dto.userId ?? null,
        };
    }

    fromEditDto(dto: EditPersonDto): EditPersonCommand {
        return {
            username: dto.username,
            personType: dto.personType,
            laundryIds: dto.laundryIds,
            machineIds: dto.machineIds,
            userId: dto.userId,
        };
    }
}

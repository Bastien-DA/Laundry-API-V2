import { AbstractMapper } from '@shared/application/mappers/abstract.mapper';
import { LaundryEntity } from '@features/laundry/domain/entities/laundry.entity';
import { LaundryDto } from '@features/laundry/interface/http/dtos/laundry.dto';
import { CreateLaundryDto } from '@features/laundry/interface/http/dtos/create-laundry.dto';
import { EditLaundryDto } from '@features/laundry/interface/http/dtos/edit-laundry.dto';
import { CreateLaundryCommand, EditLaundryCommand } from '@features/laundry/domain/ports/laundry.repository.port';

export class LaundryMapper implements AbstractMapper<LaundryEntity, LaundryDto, CreateLaundryDto, EditLaundryDto> {
    toDto(e: LaundryEntity): LaundryDto {
        return {
            id: e.id,
            name: e.name,
            hours: e.hours,
            address: e.address,
            latitude: e.latitude,
            longitude: e.longitude,
            createdAt: e.createdAt.getTime(),
            personId: e.personId,
            machineIds: e.machineIds,
        };
    }

    fromCreateDto(dto: CreateLaundryDto): CreateLaundryCommand {
        return {
            name: dto.name,
            hours: dto.hours,
            address: dto.address,
            latitude: dto.latitude,
            longitude: dto.longitude,
            personId: dto.personId,
            machineIds: dto.machineIds ?? [],
        };
    }

    fromEditDto(dto: EditLaundryDto): EditLaundryCommand {
        return {
            name: dto.name,
            hours: dto.hours,
            address: dto.address,
            latitude: dto.latitude,
            longitude: dto.longitude,
            personId: dto.personId,
            machineIds: dto.machineIds,
        };
    }
}

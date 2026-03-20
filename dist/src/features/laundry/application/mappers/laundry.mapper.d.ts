import { AbstractMapper } from '@shared/application/mappers/abstract.mapper';
import { LaundryEntity } from '@features/laundry/domain/entities/laundry.entity';
import { LaundryDto } from '@features/laundry/interface/http/dtos/laundry.dto';
import { CreateLaundryDto } from '@features/laundry/interface/http/dtos/create-laundry.dto';
import { EditLaundryDto } from '@features/laundry/interface/http/dtos/edit-laundry.dto';
import { CreateLaundryCommand, EditLaundryCommand } from '@features/laundry/domain/ports/laundry.repository.port';
export declare class LaundryMapper implements AbstractMapper<LaundryEntity, LaundryDto, CreateLaundryDto, EditLaundryDto> {
    toDto(e: LaundryEntity): LaundryDto;
    fromCreateDto(dto: CreateLaundryDto): CreateLaundryCommand;
    fromEditDto(dto: EditLaundryDto): EditLaundryCommand;
}

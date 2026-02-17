import { AbstractMapper } from '@shared/application/mappers/abstract.mapper';
import { ProgramEntity } from '@features/program/domain/entities/program.entity';
import { ProgramDto } from '@features/program/interface/http/dtos/program.dto';
import { CreateProgramDto } from '@features/program/interface/http/dtos/create-program.dto';
import { EditProgramDto } from '@features/program/interface/http/dtos/edit-program.dto';

export class ProgramMapper implements AbstractMapper<
    ProgramEntity,
    ProgramDto,
    CreateProgramDto,
    EditProgramDto
> {
    toDto(e: ProgramEntity): ProgramDto {
        return {
            id: e.id,
            name: e.name,
            temperature: e.temperature,
            speed: e.speed,
            duration: e.duration,
            machineIds: e.machineIds,
            machineStatusIds: e.machineStatusIds,
        };
    }

    fromCreateDto(dto: CreateProgramDto) {
        return {
            name: dto.name,
            temperature: dto.temperature,
            speed: dto.speed,
            duration: dto.duration,
            machineIds: dto.machineIds ?? [],
        };
    }

    fromEditDto(dto: EditProgramDto) {
        return {
            name: dto.name,
            temperature: dto.temperature,
            speed: dto.speed,
            duration: dto.duration,
            machineIds: dto.machineIds,
        };
    }
}

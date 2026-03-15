import { AbstractMapper } from '@shared/application/mappers/abstract.mapper';
import { ProgramEntity } from '@features/program/domain/entities/program.entity';
import { ProgramDto } from '@features/program/interface/http/dtos/program.dto';
import { CreateProgramDto } from '@features/program/interface/http/dtos/create-program.dto';
import { EditProgramDto } from '@features/program/interface/http/dtos/edit-program.dto';
export declare class ProgramMapper implements AbstractMapper<ProgramEntity, ProgramDto, CreateProgramDto, EditProgramDto> {
    toDto(e: ProgramEntity): ProgramDto;
    fromCreateDto(dto: CreateProgramDto): {
        name: string;
        temperature: number;
        speed: number;
        duration: number;
        machineIds: string[];
    };
    fromEditDto(dto: EditProgramDto): {
        name: string | undefined;
        temperature: number | undefined;
        speed: number | undefined;
        duration: number | undefined;
        machineIds: string[] | undefined;
    };
}

import { EditProgramDto } from '@features/program/interface/http/dtos/edit-program.dto';
import { CreateProgramDto } from '@features/program/interface/http/dtos/create-program.dto';
import { ProgramFilterDto } from '@features/program/interface/http/dtos/program-filter.dto';
import { ProgramDto } from '@features/program/interface/http/dtos/program.dto';
import { ProgramService } from '@features/program/application/services/program.service';
export declare class ProgramController {
    private readonly service;
    constructor(service: ProgramService);
    getById(id: string): Promise<ProgramDto>;
    list(filter: ProgramFilterDto): Promise<ProgramDto[]>;
    create(dto: CreateProgramDto): Promise<ProgramDto>;
    edit(id: string, dto: EditProgramDto): Promise<ProgramDto>;
    remove(id: string): Promise<void>;
}

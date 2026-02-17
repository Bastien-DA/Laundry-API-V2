import {ProgramMapper} from "@features/program/application/mappers/program.mapper";
import {Inject, Injectable} from "@nestjs/common";
import {ProgramRepository} from "@features/program/domain/ports/program.repository.port";
import {ProgramFilterDto} from "@features/program/interface/http/dtos/program-filter.dto";
import {EditProgramDto} from "@features/program/interface/http/dtos/edit-program.dto";
import {CreateProgramDto} from "@features/program/interface/http/dtos/create-program.dto";
import {ProgramDto} from "@features/program/interface/http/dtos/program.dto";
import {ProgramEntity} from "@features/program/domain/entities/program.entity";
import {AbstractService} from "@shared/application/services/abstract.service";

@Injectable()
export class ProgramService extends AbstractService<
    ProgramEntity,
    string,
    ProgramDto,
    CreateProgramDto,
    EditProgramDto,
    ProgramFilterDto
> {
    constructor(
        @Inject('ProgramRepository') repo: ProgramRepository,
        mapper: ProgramMapper,
    ) {
        super(repo as any, mapper);
    }
}

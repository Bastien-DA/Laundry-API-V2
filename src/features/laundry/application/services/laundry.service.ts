import {Inject, Injectable} from '@nestjs/common';
import { AbstractService } from '@shared/application/services/abstract.service';
import { LaundryEntity } from '@features/laundry/domain/entities/laundry.entity';
import { LaundryDto } from '@features/laundry/interface/http/dtos/laundry.dto';
import { CreateLaundryDto } from '@features/laundry/interface/http/dtos/create-laundry.dto';
import { EditLaundryDto } from '@features/laundry/interface/http/dtos/edit-laundry.dto';
import { LaundryFilterDto } from '@features/laundry/interface/http/dtos/laundry-filter.dto';
import { LaundryMapper } from '@features/laundry/application/mappers/laundry.mapper';
import {LaundryRepository} from "@features/laundry/domain/ports/laundry.repository.port";

@Injectable()
export class LaundryService extends AbstractService<
    LaundryEntity,
    string,
    LaundryDto,
    CreateLaundryDto,
    EditLaundryDto,
    LaundryFilterDto
> {
    constructor(@Inject('LaundryRepository') repo: LaundryRepository, mapper: LaundryMapper) {
        super(repo as any, mapper);
    }
}

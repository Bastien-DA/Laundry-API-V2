import { LaundryService } from '@features/laundry/application/services/laundry.service';
import { CreateLaundryDto } from './dtos/create-laundry.dto';
import { EditLaundryDto } from './dtos/edit-laundry.dto';
import { LaundryFilterDto } from './dtos/laundry-filter.dto';
import { LaundryDto } from "@features/laundry/interface/http/dtos/laundry.dto";
export declare class LaundryController {
    private readonly service;
    constructor(service: LaundryService);
    getById(id: string): Promise<LaundryDto>;
    list(filter: LaundryFilterDto): Promise<LaundryDto[]>;
    create(dto: CreateLaundryDto): Promise<LaundryDto>;
    edit(id: string, dto: EditLaundryDto): Promise<LaundryDto>;
    remove(id: string): Promise<void>;
}

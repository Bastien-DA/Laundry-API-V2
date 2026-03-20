import { MachineService } from '@features/machine/application/services/machine.service';
import { CreateMachineDto } from './dtos/create-machine.dto';
import { EditMachineDto } from './dtos/edit-machine.dto';
import { MachineFilterDto } from './dtos/machine-filter.dto';
import { MachineDto } from './dtos/machine.dto';
export declare class MachineController {
    private readonly service;
    constructor(service: MachineService);
    getById(id: string): Promise<MachineDto>;
    list(filter: MachineFilterDto): Promise<MachineDto[]>;
    create(dto: CreateMachineDto): Promise<MachineDto>;
    edit(id: string, dto: EditMachineDto): Promise<MachineDto>;
    remove(id: string): Promise<void>;
    start(req: any, id: string, programId: string): Promise<void>;
    pause(id: string): Promise<void>;
    resume(id: string): Promise<void>;
    stop(id: string): Promise<void>;
    outOfOrder(id: string): Promise<void>;
    available(id: string): Promise<void>;
}

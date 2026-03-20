import { AbstractMapper } from '@shared/application/mappers/abstract.mapper';
import { MachineEntity } from '@features/machine/domain/entities/machine.entity';
import { MachineDto } from '@features/machine/interface/http/dtos/machine.dto';
import { CreateMachineDto } from '@features/machine/interface/http/dtos/create-machine.dto';
import { EditMachineDto } from '@features/machine/interface/http/dtos/edit-machine.dto';
import { CreateMachineCommand, EditMachineCommand } from '@features/machine/domain/ports/machine.repository.port';
export declare class MachineMapper implements AbstractMapper<MachineEntity, MachineDto, CreateMachineDto, EditMachineDto> {
    toDto(e: MachineEntity): MachineDto;
    fromCreateDto(dto: CreateMachineDto): CreateMachineCommand;
    fromEditDto(dto: EditMachineDto): EditMachineCommand;
}

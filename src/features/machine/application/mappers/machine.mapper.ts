import { AbstractMapper } from '@shared/application/mappers/abstract.mapper';
import { MachineEntity } from '@features/machine/domain/entities/machine.entity';
import { MachineDto } from '@features/machine/interface/http/dtos/machine.dto';
import { CreateMachineDto } from '@features/machine/interface/http/dtos/create-machine.dto';
import { EditMachineDto } from '@features/machine/interface/http/dtos/edit-machine.dto';
import { CreateMachineCommand, EditMachineCommand } from '@features/machine/domain/ports/machine.repository.port';

export class MachineMapper implements AbstractMapper<MachineEntity, MachineDto, CreateMachineDto, EditMachineDto> {
    toDto(e: MachineEntity): MachineDto {
        return {
            id: e.id,
            name: e.name,
            type: e.type,
            price: e.price,

            laundryId: e.laundryId,
            personId: e.personId,

            machineStatusId: e.machineStatusId,
            status: e.status,
            currentProgramId: e.currentProgramId,

            programIds: e.programIds,
        };
    }

    fromCreateDto(dto: CreateMachineDto): CreateMachineCommand {
        return {
            name: dto.name,
            type: dto.type,
            price: dto.price,
            laundryId: dto.laundryId,
            personId: dto.personId ?? null,
            programIds: dto.programIds ?? [],
        };
    }

    fromEditDto(dto: EditMachineDto): EditMachineCommand {
        return {
            name: dto.name,
            type: dto.type,
            price: dto.price,
            personId: dto.personId,
            programIds: dto.programIds,
        };
    }
}

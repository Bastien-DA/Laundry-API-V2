import { Injectable, NotFoundException } from '@nestjs/common';
import {LaundryDto} from "../dtos/laundry.dto";
import {LaundriesRepository} from "../../infrastructure/laundries.repository";
import {CreateLaundryDto} from "../dtos/create-laundry.dto";

function toLaundryDto(row: any): LaundryDto {
    return {
        id: row.id,
        name: row.name,
        hours: row.hours,
        address: row.address,
        latitude: row.latitude.toString(),
        longitude: row.longitude.toString(),
        createdAt: row.createdAt,
        personId: row.personId,
        machineIds: row.machines.map((m: any) => m.id),
    };
}

@Injectable()
export class LaundriesService {
    constructor(private readonly repository: LaundriesRepository) {}

    async getAll(): Promise<LaundryDto[]> {
        const rows = await this.repository.findAll();
        return rows.map(toLaundryDto);
    }

    async getOne(id: string): Promise<LaundryDto> {
        const row = await this.repository.findById(id);
        if (!row) throw new NotFoundException('Laundry not found');
        return toLaundryDto(row);
    }

    async create(dto: CreateLaundryDto, personId: string): Promise<LaundryDto> {
        const row = await this.repository.create({
            ...dto,
            personId,
        });
        return toLaundryDto(row);
    }

    async remove(id: string): Promise<boolean> {
        return this.repository.delete(id);
    }
}

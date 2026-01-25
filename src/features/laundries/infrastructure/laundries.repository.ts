import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../../core/database/prisma.service";
import { Laundry } from '@prisma/client';


@Injectable()
export class LaundriesRepository {
    constructor(private readonly prisma: PrismaService) {}

    findAll():Promise<Array<Laundry>> {
        return this.prisma.laundry.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    findById(id: string): Promise<Laundry | null> {
        return this.prisma.laundry.findUnique({
            where: { id },
        });
    }

    create(data: {
        name: string;
        hours: string;
        address: string;
        latitude: number;
        longitude: number;
        personId: string;
    }): Promise<Laundry> {
        return this.prisma.laundry.create({
            data: {
                name: data.name,
                hours: data.hours,
                address: data.address,
                latitude: data.latitude,
                longitude: data.longitude,
                personId: data.personId,
            },
        });
    }

    async delete(id: string) {
        // deleteMany => renvoie count, pratique pour “exists ?”
        const res = await this.prisma.laundry.deleteMany({ where: { id } });
        return res.count > 0;
    }
}

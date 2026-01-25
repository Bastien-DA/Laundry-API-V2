import { ApiProperty } from '@nestjs/swagger';

export class LaundryDto {
    @ApiProperty() id!: string;
    @ApiProperty() name!: string;
    @ApiProperty() hours!: string;
    @ApiProperty() address!: string;

    // Prisma Decimal => souvent string en sortie : on standardise en string
    @ApiProperty({ example: '48.8566000' }) latitude!: string;
    @ApiProperty({ example: '2.3522000' }) longitude!: string;

    @ApiProperty() createdAt!: Date;

    // IDs only (pas d’entités chargées)
    @ApiProperty() personId!: string;
    @ApiProperty({ type: [String] }) machineIds!: string[];
}

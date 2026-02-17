export class LaundryDto {
    id!: string;
    name!: string;
    hours!: string;
    address!: string;

    latitude!: string;   // ✅ string
    longitude!: string;  // ✅ string

    createdAt!: number;  // ms timestamp

    personId!: string;
    machineIds!: string[];
}

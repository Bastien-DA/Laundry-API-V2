export class UserDto {
  id!: string;
  email!: string;
  createdAt!: number; // ms timestamp
  personId!: string | null;
}

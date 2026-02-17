export class UserEntity {
  constructor(
    public readonly id: string,
    public email: string,
    public createdAt: Date,
    // ✅ relation 1–1 optionnelle => 1 id ou null
    public personId: string | null,
  ) {}
}

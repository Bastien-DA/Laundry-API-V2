export declare class UserEntity {
    readonly id: string;
    email: string;
    createdAt: Date;
    personId: string | null;
    constructor(id: string, email: string, createdAt: Date, personId: string | null);
}

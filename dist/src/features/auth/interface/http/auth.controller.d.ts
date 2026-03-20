import { AuthService } from '@features/auth/application/services/auth.service';
import { RegisterDto } from '@features/auth/interface/http/dtos/register.dto';
import { LoginDto } from '@features/auth/interface/http/dtos/login.dto';
export declare class AuthController {
    private readonly service;
    constructor(service: AuthService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
    }>;
    me(req: any): any;
}

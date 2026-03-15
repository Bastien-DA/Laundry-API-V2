import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from '@features/auth/interface/http/dtos/register.dto';
import { LoginDto } from '@features/auth/interface/http/dtos/login.dto';
import { UserRepository } from '@features/user/domain/ports/user.repository.port';
import { PrismaService } from '@core/database/prisma.service';
export declare class AuthService {
    private readonly userRepository;
    private readonly prisma;
    private readonly jwtService;
    constructor(userRepository: UserRepository, prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
    }>;
    private generateToken;
}

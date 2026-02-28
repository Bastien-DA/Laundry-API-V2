import { Inject, Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '@features/auth/interface/http/dtos/register.dto';
import { LoginDto } from '@features/auth/interface/http/dtos/login.dto';
import { UserRepository } from '@features/user/domain/ports/user.repository.port';
import { PrismaService } from '@core/database/prisma.service';

@Injectable()
export class AuthService {

    constructor(
        @Inject('UserRepository')
        private readonly userRepository: UserRepository,
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
    ) {}

    async register(dto: RegisterDto) {

        const existing = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });

        if (existing) {
            throw new BadRequestException('Email already used');
        }

        const hashedPassword = await bcrypt.hash(dto.password, 10);

        // 🔥 création via UserRepository
        const user = await this.userRepository.create({
            passwordHash: hashedPassword,
            email: dto.email,
        });

        return this.generateToken(user.id, user.email);
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const valid = await bcrypt.compare(dto.password, user.passwordHash);
        if (!valid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const person = await this.prisma.person.findUnique({
            where: { id: user.personId ?? undefined },
        });

        return this.generateToken(user.id, user.email, person?.personType);
    }

    private generateToken(userId: string, email: string, role?: string) {
        const payload = { sub: userId, email, role };

        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}

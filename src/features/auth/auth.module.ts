import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '@features/auth/application/services/auth.service';
import { AuthController } from '@features/auth/interface/http/auth.controller';
import { userProviders } from '@features/user/infrastructure/di/user.providers';
import { PrismaService } from '@core/database/prisma.service';
import {PassportModule} from "@nestjs/passport";
import {ConfigService} from "@nestjs/config";
import {StringValue} from "ms";
import {JwtStrategy} from "@features/auth/infrastructure/security/jwt.strategy";
import {APP_GUARD} from "@nestjs/core";
import {RolesGuard} from "@features/auth/infrastructure/security/roles.guard";

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                secret: config.getOrThrow<string>('JWT_SECRET'),
                signOptions: { expiresIn: config.getOrThrow<string>('JWT_EXPIRES_IN') as StringValue },
            }),
        }),
    ],
    controllers: [AuthController],
    providers: [
        JwtStrategy,
        AuthService,
        PrismaService,
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
        ...userProviders, // 🔥 inject UserRepository
    ],
})
export class AuthModule {}

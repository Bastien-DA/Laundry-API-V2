import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './security/jwt.strategy';
import { AuthController } from './api/auth.controller';
import {JwtModule} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import {StringValue} from "ms";

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
    providers: [JwtStrategy],
})
export class AuthModule {}

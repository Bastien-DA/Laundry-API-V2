import {Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import { AuthService } from '@features/auth/application/services/auth.service';
import { RegisterDto } from '@features/auth/interface/http/dtos/register.dto';
import { LoginDto } from '@features/auth/interface/http/dtos/login.dto';
import {ApiBearerAuth} from "@nestjs/swagger";
import {JwtAuthGuard} from "@features/auth/infrastructure/security/jwt-auth-guard";

@Controller('auth')
export class AuthController {

    constructor(private readonly service: AuthService) {}

    @Post('register')
    register(@Body() dto: RegisterDto) {
        return this.service.register(dto);
    }

    @Post('login')
    login(@Body() dto: LoginDto) {
        return this.service.login(dto);
    }

    @ApiBearerAuth('jwt')
    @UseGuards(JwtAuthGuard)
    @Get('me')
    me(@Req() req: any) {
        return req.user;
    }
}


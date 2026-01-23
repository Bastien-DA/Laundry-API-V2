import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import {JwtAuthGuard} from "../security/jwt-auth-guard";
import {LoginDto} from "../application/dtos/login.dto";

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
    constructor(private readonly jwt: JwtService) {}

    @Post('login')
    login(@Body() body: LoginDto) {
        const payload = { sub: body.userId, email: body.email };
        return { access_token: this.jwt.sign(payload) };
    }

    @ApiBearerAuth('jwt')
    @UseGuards(JwtAuthGuard)
    @Get('me')
    me(@Req() req: any) {
        return req.user;
    }
}

import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {JwtAuthGuard} from "../security/jwt-auth-guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly jwt: JwtService) {}

    @Post('login')
    login(@Body() body: { userId: string; email?: string; roles?: string[] }) {
        // En vrai: tu valides user/password -> DB
        const payload = { sub: body.userId, email: body.email, roles: body.roles ?? [] };
        return { access_token: this.jwt.sign(payload) };
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    me(@Req() req: any) {
        return req.user; // provient du validate() de JwtStrategy
    }
}

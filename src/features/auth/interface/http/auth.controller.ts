import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiBody,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
} from '@nestjs/swagger';

import { AuthService } from '@features/auth/application/services/auth.service';
import { RegisterDto } from '@features/auth/interface/http/dtos/register.dto';
import { LoginDto } from '@features/auth/interface/http/dtos/login.dto';
import { JwtAuthGuard } from '@features/auth/infrastructure/security/jwt-auth-guard';

@Controller('auth')
export class AuthController {

    constructor(private readonly service: AuthService) {}

    @ApiOperation({ summary: 'Register a new user' })
    @ApiBody({ type: RegisterDto })
    @ApiCreatedResponse({
        schema: {
            example: {
                accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
        },
    })
    @Post('register')
    register(@Body() dto: RegisterDto): Promise<{ accessToken: string }> {
        return this.service.register(dto);
    }

    @ApiOperation({ summary: 'Login user and return JWT' })
    @ApiBody({ type: LoginDto })
    @ApiOkResponse({
        schema: {
            example: {
                accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
        },
    })
    @Post('login')
    login(@Body() dto: LoginDto): Promise<{ accessToken: string }> {
        return this.service.login(dto);
    }

    @ApiOperation({ summary: 'Get current authenticated user' })
    @ApiBearerAuth('jwt')
    @ApiOkResponse({
        schema: {
            example: {
                id: 'user-uuid',
                email: 'customer@dev.local',
                role: 'CUSTOMER',
            },
        },
    })
    @UseGuards(JwtAuthGuard)
    @Get('me')
    me(@Req() req: any) {
        return req.user;
    }
}
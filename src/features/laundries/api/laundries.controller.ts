import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Req,
    UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import {JwtAuthGuard} from "../../auth/security/jwt-auth-guard";
import {LaundryDto} from "../application/dtos/laundry.dto";
import {CreateLaundryDto} from "../application/dtos/create-laundry.dto";
import {LaundriesService} from "../application/services/laundries.services";

@ApiTags('Laundries')
@ApiBearerAuth('jwt')
@UseGuards(JwtAuthGuard)
@Controller({ path: 'laundries', version: '1' })
export class LaundriesController {
    constructor(private readonly laundries: LaundriesService) {}

    @Get()
    @ApiResponse({ status: 200, type: [LaundryDto] })
    getAll(): Promise<LaundryDto[]> {
        return this.laundries.getAll();
    }

    @Get(':id')
    @ApiResponse({ status: 200, type: LaundryDto })
    @ApiResponse({ status: 404 })
    getOne(@Param('id') id: string): Promise<LaundryDto> {
        return this.laundries.getOne(id);
    }

    @Post()
    @ApiResponse({ status: 201, type: LaundryDto })
    @ApiResponse({ status: 400 })
    async create(@Body() dto: CreateLaundryDto, @Req() req: any): Promise<LaundryDto> {
        // req.user vient de JwtStrategy.validate()
        // Ici tu dois définir ce que représente "personId" : soit userId, soit user.personId
        const personId = req.user.personId ?? req.user.userId ?? req.user.sub;

        return this.laundries.create(dto, personId);
    }

    @Delete(':id')
    @HttpCode(204)
    @ApiResponse({ status: 204 })
    @ApiResponse({ status: 404 })
    async delete(@Param('id') id: string) {
        const ok = await this.laundries.remove(id);
        if (!ok) {
            // Nest renverra 404 si tu veux être strict :
            // throw new NotFoundException('Laundry not found');
            // Là, on colle au C# : NotFound si n'existe pas
            return { statusCode: 404 };
        }
        // 204 => no content
        return;
    }
}

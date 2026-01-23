import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/security/jwt-auth-guard';

@ApiTags('Machines')
@Controller({ path: 'machines', version: '1' })
export class MachinesController {
  @ApiBearerAuth('jwt')
  @UseGuards(JwtAuthGuard)
  @Get()
  getMachines() {
    return 'Machines';
  }
}

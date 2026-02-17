import { Module } from '@nestjs/common';
import { MachineController } from './interface/http/machine.controller';
import { MachineService } from '@features/machine/application/services/machine.service';
import { machineProviders } from '@features/machine/infrastructure/di/machine.providers';

@Module({
    controllers: [MachineController],
    providers: [MachineService, ...machineProviders],
    exports: [MachineService],
})
export class MachineModule {}

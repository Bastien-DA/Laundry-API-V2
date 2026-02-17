import { Module } from '@nestjs/common';
import { LaundryController } from './interface/http/laundry.controller';
import { LaundryService } from '@features/laundry/application/services/laundry.service';
import { laundryProviders } from '@features/laundry/infrastructure/di/laundry.providers';

@Module({
    controllers: [LaundryController],
    providers: [LaundryService, ...laundryProviders],
    exports: [LaundryService],
})
export class LaundryModule {}

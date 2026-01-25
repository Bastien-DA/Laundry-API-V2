import { Module } from '@nestjs/common';
import { LaundriesController } from './api/laundries.controller';
import {LaundriesService} from "./application/services/laundries.services";
import {LaundriesRepository} from "./infrastructure/laundries.repository";

@Module({
    controllers: [LaundriesController],
    providers: [LaundriesService, LaundriesRepository],
})
export class LaundriesModule {}

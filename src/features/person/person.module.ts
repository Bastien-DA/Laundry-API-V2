import { Module } from '@nestjs/common';
import { PersonController } from '@features/person/interface/http/person.controller';
import { PersonService } from '@features/person/application/services/person.service';
import { personProviders } from '@features/person/infrastructure/di/person.providers';

@Module({
    controllers: [PersonController],
    providers: [PersonService, ...personProviders],
    exports: [PersonService],
})
export class PersonModule {}

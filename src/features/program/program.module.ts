import {Module} from "@nestjs/common";
import {ProgramController} from "@features/program/interface/http/program.controller";
import {ProgramService} from "@features/program/application/services/program.service";
import {programProviders} from "@features/program/infrastructure/di/program.providers";

@Module({
    controllers: [ProgramController],
    providers: [ProgramService, ...programProviders],
    exports: [ProgramService],
})
export class ProgramModule {}

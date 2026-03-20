"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const env_validation_1 = require("./core/config/env.validation");
const auth_module_1 = require("./features/auth/auth.module");
const request_logger_middleware_1 = require("./core/middlewares/request-logger.middleware");
const database_module_1 = require("./core/database/database.module");
const laundry_module_1 = require("./features/laundry/laundry.module");
const user_module_1 = require("./features/user/user.module");
const machine_module_1 = require("./features/machine/machine.module");
const program_module_1 = require("./features/program/program.module");
const person_module_1 = require("./features/person/person.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(request_logger_middleware_1.RequestLoggerMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validate: env_validation_1.validateEnv,
            }),
            auth_module_1.AuthModule,
            database_module_1.DatabaseModule,
            laundry_module_1.LaundryModule,
            machine_module_1.MachineModule,
            program_module_1.ProgramModule,
            person_module_1.PersonModule,
            user_module_1.UserModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
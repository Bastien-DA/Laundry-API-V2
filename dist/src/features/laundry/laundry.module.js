"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaundryModule = void 0;
const common_1 = require("@nestjs/common");
const laundry_controller_1 = require("./interface/http/laundry.controller");
const laundry_service_1 = require("./application/services/laundry.service");
const laundry_providers_1 = require("./infrastructure/di/laundry.providers");
let LaundryModule = class LaundryModule {
};
exports.LaundryModule = LaundryModule;
exports.LaundryModule = LaundryModule = __decorate([
    (0, common_1.Module)({
        controllers: [laundry_controller_1.LaundryController],
        providers: [laundry_service_1.LaundryService, ...laundry_providers_1.laundryProviders],
        exports: [laundry_service_1.LaundryService],
    })
], LaundryModule);
//# sourceMappingURL=laundry.module.js.map
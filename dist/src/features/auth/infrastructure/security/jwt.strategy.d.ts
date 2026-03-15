import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import type { JwtPayload } from './jwt-payload.type';
import { UserRepository } from "@features/user/domain/ports/user.repository.port";
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly config;
    private readonly userRepository;
    constructor(config: ConfigService, userRepository: UserRepository);
    validate(payload: JwtPayload): Promise<{
        user: import("../../../user/domain/entities/user.entity").UserEntity;
    }>;
}
export {};

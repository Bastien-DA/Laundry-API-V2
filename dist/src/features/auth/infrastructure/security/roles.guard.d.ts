import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PersonRepository } from "@features/person/domain/ports/person.repository.port";
export declare class RolesGuard implements CanActivate {
    private reflector;
    private readonly personRepository;
    constructor(reflector: Reflector, personRepository: PersonRepository);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

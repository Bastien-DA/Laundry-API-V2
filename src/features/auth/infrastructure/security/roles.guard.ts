import {
    CanActivate,
    ExecutionContext,
    Injectable,
    ForbiddenException, Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import {UserRepository} from "@features/user/domain/ports/user.repository.port";
import {PersonRepository} from "@features/person/domain/ports/person.repository.port";

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private reflector: Reflector,
                @Inject('PersonRepository')
                private readonly personRepository: PersonRepository,) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        );

        if (!requiredRoles) return true;

        const request = context.switchToHttp().getRequest();
        const user = request.user.user;

        const person = await this.personRepository.findById(user.personId);

        if (!person || !requiredRoles.includes(person.personType)) {
            throw new ForbiddenException('Insufficient role');
        }

        return true;
    }
}

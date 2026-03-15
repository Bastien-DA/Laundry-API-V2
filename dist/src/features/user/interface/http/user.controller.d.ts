import { UserService } from '@features/user/application/services/user.service';
import { UserDto } from '@features/user/interface/http/dtos/user.dto';
import { EditUserDto } from '@features/user/interface/http/dtos/edit-user.dto';
import { UserFilterDto } from '@features/user/interface/http/dtos/user-filter.dto';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    getById(id: string): Promise<UserDto>;
    list(filter: UserFilterDto): Promise<UserDto[]>;
    edit(id: string, dto: EditUserDto): Promise<UserDto>;
    remove(id: string): Promise<void>;
}

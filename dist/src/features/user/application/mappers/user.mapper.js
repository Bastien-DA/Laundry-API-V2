"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    toDto(e) {
        return {
            id: e.id,
            email: e.email,
            createdAt: e.createdAt.getTime(),
            personId: e.personId ?? undefined,
        };
    }
    fromCreateDto(dto) {
        return {
            email: dto.email,
            passwordHash: '',
            personId: dto.personId ?? null,
        };
    }
    fromEditDto(dto) {
        return {
            email: dto.email,
            personId: dto.personId,
        };
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map
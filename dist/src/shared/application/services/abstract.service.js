"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractService = void 0;
const common_1 = require("@nestjs/common");
class AbstractService {
    repo;
    mapper;
    constructor(repo, mapper) {
        this.repo = repo;
        this.mapper = mapper;
    }
    async getById(id) {
        const entity = await this.repo.findById(id);
        if (!entity)
            throw new common_1.NotFoundException();
        return this.mapper.toDto(entity);
    }
    async list(params) {
        const items = await this.repo.findMany(params);
        return items.map((e) => this.mapper.toDto(e));
    }
    async create(dto) {
        const data = this.mapper.fromCreateDto(dto);
        const entity = await this.repo.create(data);
        return this.mapper.toDto(entity);
    }
    async edit(id, dto) {
        const data = this.mapper.fromEditDto(dto);
        const entity = await this.repo.update(id, data);
        return this.mapper.toDto(entity);
    }
    async remove(id) {
        await this.repo.delete(id);
    }
}
exports.AbstractService = AbstractService;
//# sourceMappingURL=abstract.service.js.map
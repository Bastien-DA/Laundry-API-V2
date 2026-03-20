"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
exports.validateEnv = validateEnv;
const zod_1 = require("zod");
exports.envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.string().default('development'),
    PORT: zod_1.z.coerce.number().default(3000),
    JWT_SECRET: zod_1.z.string().min(20),
    JWT_EXPIRES_IN: zod_1.z.string().default('3600s'),
});
function validateEnv(config) {
    const parsed = exports.envSchema.safeParse(config);
    if (!parsed.success) {
        console.error(parsed.error);
        throw new Error('Invalid environment variables');
    }
    return parsed.data;
}
//# sourceMappingURL=env.validation.js.map
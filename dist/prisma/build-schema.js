"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function readAllPrismaFiles(dir) {
    if (!fs_1.default.existsSync(dir))
        return '';
    return fs_1.default
        .readdirSync(dir)
        .filter((f) => f.endsWith('.prisma'))
        .sort()
        .map((f) => fs_1.default.readFileSync(`${dir}/${f}`, 'utf8').trim())
        .filter(Boolean)
        .join('\n\n');
}
const base = fs_1.default.readFileSync('prisma/base.prisma', 'utf8').trim();
const enums = readAllPrismaFiles('prisma/enums');
const models = readAllPrismaFiles('prisma/models');
const schema = [base, enums, models].filter(Boolean).join('\n\n') + '\n';
fs_1.default.writeFileSync('prisma/schema.prisma', schema);
console.log('✅ prisma/schema.prisma generated');
//# sourceMappingURL=build-schema.js.map
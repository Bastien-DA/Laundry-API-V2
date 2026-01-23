import fs from 'fs';

function readAllPrismaFiles(dir: string) {
    if (!fs.existsSync(dir)) return '';
    return fs
        .readdirSync(dir)
        .filter((f) => f.endsWith('.prisma'))
        .sort()
        .map((f) => fs.readFileSync(`${dir}/${f}`, 'utf8').trim())
        .filter(Boolean)
        .join('\n\n');
}

const base = fs.readFileSync('prisma/base.prisma', 'utf8').trim();

const enums = readAllPrismaFiles('prisma/enums');
const models = readAllPrismaFiles('prisma/models');

const schema = [base, enums, models].filter(Boolean).join('\n\n') + '\n';

fs.writeFileSync('prisma/schema.prisma', schema);
console.log('✅ prisma/schema.prisma generated');

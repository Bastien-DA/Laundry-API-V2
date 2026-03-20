import { DatabaseModule } from '@core/database/database.module';
import { PrismaService } from '@core/database/prisma.service';

describe('DatabaseModule metadata', () => {
  it('should provide and export PrismaService', () => {
    const providers = Reflect.getMetadata('providers', DatabaseModule) as unknown[];
    const exportsList = Reflect.getMetadata('exports', DatabaseModule) as unknown[];

    expect(providers).toContain(PrismaService);
    expect(exportsList).toContain(PrismaService);
  });
});

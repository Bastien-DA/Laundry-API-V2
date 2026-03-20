import { ProgramModule } from '@features/program/program.module';
import { ProgramController } from '@features/program/interface/http/program.controller';
import { ProgramService } from '@features/program/application/services/program.service';

describe('ProgramModule metadata', () => {
  it('should register controller/service and export service', () => {
    const controllers = Reflect.getMetadata('controllers', ProgramModule) as unknown[];
    const providers = Reflect.getMetadata('providers', ProgramModule) as unknown[];
    const exportsList = Reflect.getMetadata('exports', ProgramModule) as unknown[];

    expect(controllers).toContain(ProgramController);
    expect(providers).toContain(ProgramService);
    expect(exportsList).toContain(ProgramService);
  });
});

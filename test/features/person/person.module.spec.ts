import { PersonModule } from '@features/person/person.module';
import { PersonController } from '@features/person/interface/http/person.controller';
import { PersonService } from '@features/person/application/services/person.service';

describe('PersonModule metadata', () => {
  it('should register controller/service and export service', () => {
    const controllers = Reflect.getMetadata('controllers', PersonModule) as unknown[];
    const providers = Reflect.getMetadata('providers', PersonModule) as unknown[];
    const exportsList = Reflect.getMetadata('exports', PersonModule) as unknown[];

    expect(controllers).toContain(PersonController);
    expect(providers).toContain(PersonService);
    expect(exportsList).toContain(PersonService);
  });
});

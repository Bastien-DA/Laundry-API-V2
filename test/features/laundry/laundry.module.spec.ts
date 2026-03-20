import { LaundryModule } from '@features/laundry/laundry.module';
import { LaundryController } from '@features/laundry/interface/http/laundry.controller';
import { LaundryService } from '@features/laundry/application/services/laundry.service';

describe('LaundryModule metadata', () => {
  it('should register controller/service and export service', () => {
    const controllers = Reflect.getMetadata('controllers', LaundryModule) as unknown[];
    const providers = Reflect.getMetadata('providers', LaundryModule) as unknown[];
    const exportsList = Reflect.getMetadata('exports', LaundryModule) as unknown[];

    expect(controllers).toContain(LaundryController);
    expect(providers).toContain(LaundryService);
    expect(exportsList).toContain(LaundryService);
  });
});

import { MachineModule } from '@features/machine/machine.module';
import { MachineController } from '@features/machine/interface/http/machine.controller';
import { MachineService } from '@features/machine/application/services/machine.service';

describe('MachineModule metadata', () => {
  it('should register controller/service and export service', () => {
    const controllers = Reflect.getMetadata('controllers', MachineModule) as unknown[];
    const providers = Reflect.getMetadata('providers', MachineModule) as unknown[];
    const exportsList = Reflect.getMetadata('exports', MachineModule) as unknown[];

    expect(controllers).toContain(MachineController);
    expect(providers).toContain(MachineService);
    expect(exportsList).toContain(MachineService);
  });
});

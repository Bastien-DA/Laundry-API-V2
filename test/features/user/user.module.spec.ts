import { UserModule } from '@features/user/user.module';
import { UserController } from '@features/user/interface/http/user.controller';
import { UserService } from '@features/user/application/services/user.service';

describe('UserModule metadata', () => {
  it('should register controller/service and export service', () => {
    const controllers = Reflect.getMetadata('controllers', UserModule) as unknown[];
    const providers = Reflect.getMetadata('providers', UserModule) as unknown[];
    const exportsList = Reflect.getMetadata('exports', UserModule) as unknown[];

    expect(controllers).toContain(UserController);
    expect(providers).toContain(UserService);
    expect(exportsList).toContain(UserService);
  });
});

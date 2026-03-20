import { AuthModule } from '@features/auth/auth.module';
import { AuthController } from '@features/auth/interface/http/auth.controller';
import { AuthService } from '@features/auth/application/services/auth.service';
import { JwtStrategy } from '@features/auth/infrastructure/security/jwt.strategy';

describe('AuthModule metadata', () => {
  it('should register auth controller and core providers', () => {
    const controllers = Reflect.getMetadata('controllers', AuthModule) as unknown[];
    const providers = Reflect.getMetadata('providers', AuthModule) as unknown[];

    expect(controllers).toContain(AuthController);
    expect(providers).toContain(AuthService);
    expect(providers).toContain(JwtStrategy);
  });
});

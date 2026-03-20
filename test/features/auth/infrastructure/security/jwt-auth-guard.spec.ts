import { JwtAuthGuard } from '@features/auth/infrastructure/security/jwt-auth-guard';

describe('JwtAuthGuard', () => {
  it('should be defined', () => {
    expect(JwtAuthGuard).toBeDefined();
  });
});

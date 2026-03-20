import { UnauthorizedException } from '@nestjs/common';
import { JwtStrategy } from '@features/auth/infrastructure/security/jwt.strategy';

describe('JwtStrategy', () => {
  const configMock = {
    getOrThrow: jest.fn().mockReturnValue('super-secret-jwt-key'),
  };

  const userRepositoryMock = {
    findById: jest.fn(),
  };

  let strategy: JwtStrategy;

  beforeEach(() => {
    jest.clearAllMocks();
    strategy = new JwtStrategy(configMock as any, userRepositoryMock as any);
  });

  it('validate should return wrapped user when user exists', async () => {
    const user = { id: 'u1', email: 'john@example.com' };
    userRepositoryMock.findById.mockResolvedValue(user);

    await expect(strategy.validate({ sub: 'u1', email: 'john@example.com' } as any)).resolves.toEqual({
      user,
    });
  });

  it('validate should throw UnauthorizedException when user does not exist', async () => {
    userRepositoryMock.findById.mockResolvedValue(null);

    await expect(strategy.validate({ sub: 'missing', email: 'john@example.com' } as any)).rejects.toBeInstanceOf(
      UnauthorizedException,
    );
  });
});

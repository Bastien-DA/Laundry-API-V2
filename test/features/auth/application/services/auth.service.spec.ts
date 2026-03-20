import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from '@features/auth/application/services/auth.service';

jest.mock('bcrypt', () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));

describe('AuthService', () => {
  const userRepositoryMock = {
    create: jest.fn(),
  };

  const prismaMock = {
    user: {
      findUnique: jest.fn(),
    },
    person: {
      findUnique: jest.fn(),
    },
  };

  const jwtServiceMock = {
    sign: jest.fn(),
  };

  let service: AuthService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new AuthService(userRepositoryMock as any, prismaMock as any, jwtServiceMock as any);
  });

  it('register should throw when email already exists', async () => {
    prismaMock.user.findUnique.mockResolvedValue({ id: 'u1' });

    await expect(
      service.register({ email: 'john@example.com', password: 'Secret123!' } as any),
    ).rejects.toBeInstanceOf(BadRequestException);
  });

  it('register should hash password, create user and return token', async () => {
    prismaMock.user.findUnique.mockResolvedValue(null);
    (bcrypt.hash as jest.Mock).mockResolvedValue('hashed-password');
    userRepositoryMock.create.mockResolvedValue({ id: 'u1', email: 'john@example.com' });
    jwtServiceMock.sign.mockReturnValue('signed-token');

    await expect(
      service.register({ email: 'john@example.com', password: 'Secret123!' } as any),
    ).resolves.toEqual({ accessToken: 'signed-token' });

    expect(userRepositoryMock.create).toHaveBeenCalledWith({
      email: 'john@example.com',
      passwordHash: 'hashed-password',
    });
    expect(jwtServiceMock.sign).toHaveBeenCalledWith({
      sub: 'u1',
      email: 'john@example.com',
      role: undefined,
    });
  });

  it('login should throw when user does not exist', async () => {
    prismaMock.user.findUnique.mockResolvedValue(null);

    await expect(
      service.login({ email: 'john@example.com', password: 'Secret123!' } as any),
    ).rejects.toBeInstanceOf(UnauthorizedException);
  });

  it('login should throw when password is invalid', async () => {
    prismaMock.user.findUnique.mockResolvedValue({
      id: 'u1',
      email: 'john@example.com',
      passwordHash: 'stored-hash',
      personId: 'p1',
    });
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);

    await expect(
      service.login({ email: 'john@example.com', password: 'wrong' } as any),
    ).rejects.toBeInstanceOf(UnauthorizedException);
  });

  it('login should return token with role when credentials are valid', async () => {
    prismaMock.user.findUnique.mockResolvedValue({
      id: 'u1',
      email: 'john@example.com',
      passwordHash: 'stored-hash',
      personId: 'p1',
    });
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    prismaMock.person.findUnique.mockResolvedValue({ id: 'p1', personType: 'CUSTOMER' });
    jwtServiceMock.sign.mockReturnValue('signed-token');

    await expect(
      service.login({ email: 'john@example.com', password: 'Secret123!' } as any),
    ).resolves.toEqual({ accessToken: 'signed-token' });

    expect(prismaMock.person.findUnique).toHaveBeenCalledWith({ where: { id: 'p1' } });
    expect(jwtServiceMock.sign).toHaveBeenCalledWith({
      sub: 'u1',
      email: 'john@example.com',
      role: 'CUSTOMER',
    });
  });
});

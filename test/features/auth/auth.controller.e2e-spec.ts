import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../../../src/features/auth/interface/http/auth.controller';
import { AuthService } from '../../../src/features/auth/application/services/auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  const serviceMock = {
    register: jest.fn(),
    login: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = moduleRef.get(AuthController);
  });

  it('register should call service.register and return token', async () => {
    const dto = {
      email: 'john@example.com',
      password: 'Password123!',
    } as any;
    const expected = { accessToken: 'token-register' };

    serviceMock.register.mockResolvedValue(expected);

    await expect(controller.register(dto)).resolves.toEqual(expected);
    expect(serviceMock.register).toHaveBeenCalledWith(dto);
  });

  it('login should call service.login and return token', async () => {
    const dto = {
      email: 'john@example.com',
      password: 'Password123!',
    } as any;
    const expected = { accessToken: 'token-login' };

    serviceMock.login.mockResolvedValue(expected);

    await expect(controller.login(dto)).resolves.toEqual(expected);
    expect(serviceMock.login).toHaveBeenCalledWith(dto);
  });

  it('me should return req.user', () => {
    const req = {
      user: {
        id: 'user-1',
        email: 'john@example.com',
        role: 'CUSTOMER',
      },
    };

    expect(controller.me(req)).toEqual(req.user);
  });
});

import { ForbiddenException } from '@nestjs/common';
import { RolesGuard } from '@features/auth/infrastructure/security/roles.guard';

describe('RolesGuard', () => {
  const reflectorMock = {
    getAllAndOverride: jest.fn(),
  };

  const personRepositoryMock = {
    findById: jest.fn(),
  };

  let guard: RolesGuard;

  beforeEach(() => {
    jest.clearAllMocks();
    guard = new RolesGuard(reflectorMock as any, personRepositoryMock as any);
  });

  function makeContext(personId = 'p1') {
    return {
      getHandler: jest.fn(),
      getClass: jest.fn(),
      switchToHttp: () => ({
        getRequest: () => ({
          user: {
            user: { personId },
          },
        }),
      }),
    } as any;
  }

  it('should allow when no roles are required', async () => {
    reflectorMock.getAllAndOverride.mockReturnValue(undefined);

    await expect(guard.canActivate(makeContext())).resolves.toBe(true);
  });

  it('should allow when person has required role', async () => {
    reflectorMock.getAllAndOverride.mockReturnValue(['ADMIN']);
    personRepositoryMock.findById.mockResolvedValue({ id: 'p1', personType: 'ADMIN' });

    await expect(guard.canActivate(makeContext('p1'))).resolves.toBe(true);
  });

  it('should throw ForbiddenException when role is missing', async () => {
    reflectorMock.getAllAndOverride.mockReturnValue(['ADMIN']);
    personRepositoryMock.findById.mockResolvedValue({ id: 'p1', personType: 'CUSTOMER' });

    await expect(guard.canActivate(makeContext('p1'))).rejects.toBeInstanceOf(ForbiddenException);
  });
});

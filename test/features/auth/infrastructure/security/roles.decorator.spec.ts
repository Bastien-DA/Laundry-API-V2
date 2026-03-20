import { ROLES_KEY, Roles } from '@features/auth/infrastructure/security/roles.decorator';

describe('Roles decorator', () => {
  it('should set roles metadata on method', () => {
    class TestController {
      testMethod() {
        return undefined;
      }
    }

    const descriptor = Object.getOwnPropertyDescriptor(TestController.prototype, 'testMethod');
    if (!descriptor) {
      throw new Error('Descriptor missing');
    }

    Roles('ADMIN', 'TECHNICIAN')(TestController.prototype, 'testMethod', descriptor);

    const metadata = Reflect.getMetadata(ROLES_KEY, TestController.prototype.testMethod as object);
    expect(metadata).toEqual(['ADMIN', 'TECHNICIAN']);
  });
});

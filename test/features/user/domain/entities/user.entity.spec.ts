import { UserEntity } from '@features/user/domain/entities/user.entity';

describe('UserEntity', () => {
  it('should store constructor values', () => {
    const entity = new UserEntity('u1', 'john@example.com', new Date('2026-01-01T00:00:00.000Z'), null);

    expect(entity.id).toBe('u1');
    expect(entity.email).toBe('john@example.com');
    expect(entity.personId).toBeNull();
  });
});

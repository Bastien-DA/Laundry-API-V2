import { UserMapper } from '@features/user/application/mappers/user.mapper';

describe('UserMapper', () => {
  const mapper = new UserMapper();

  it('toDto should map entity fields', () => {
    const dto = mapper.toDto({
      id: 'u1',
      email: 'john@example.com',
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
      personId: null,
    } as any);

    expect(dto).toEqual({
      id: 'u1',
      email: 'john@example.com',
      createdAt: new Date('2026-01-01T00:00:00.000Z').getTime(),
      personId: undefined,
    });
  });

  it('fromCreateDto should set empty passwordHash and nullable personId', () => {
    expect(mapper.fromCreateDto({ email: 'john@example.com' } as any)).toEqual({
      email: 'john@example.com',
      passwordHash: '',
      personId: null,
    });
  });
});

import { validateEnv } from '@core/config/env.validation';

describe('validateEnv', () => {
  it('should return parsed values for valid config', () => {
    const parsed = validateEnv({
      NODE_ENV: 'test',
      PORT: '4010',
      JWT_SECRET: '12345678901234567890',
      JWT_EXPIRES_IN: '3600s',
    });

    expect(parsed.NODE_ENV).toBe('test');
    expect(parsed.PORT).toBe(4010);
    expect(parsed.JWT_SECRET).toBe('12345678901234567890');
    expect(parsed.JWT_EXPIRES_IN).toBe('3600s');
  });

  it('should apply defaults when optional vars are missing', () => {
    const parsed = validateEnv({
      JWT_SECRET: '12345678901234567890',
    });

    expect(parsed.NODE_ENV).toBe('development');
    expect(parsed.PORT).toBe(3000);
    expect(parsed.JWT_EXPIRES_IN).toBe('3600s');
  });

  it('should throw when JWT_SECRET is too short', () => {
    expect(() =>
      validateEnv({
        JWT_SECRET: 'short',
      }),
    ).toThrow('Invalid environment variables');
  });
});

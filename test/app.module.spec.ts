jest.mock('@core/config/env.validation', () => ({
  validateEnv: jest.fn().mockImplementation((config: Record<string, unknown>) => config),
}));

import { AppModule } from '../src/app.module';
import { RequestLoggerMiddleware } from '@core/middlewares/request-logger.middleware';

describe('AppModule', () => {
  it('configure should register RequestLoggerMiddleware for all routes', () => {
    const forRoutes = jest.fn();
    const apply = jest.fn().mockReturnValue({ forRoutes });
    const consumer = { apply } as any;

    const appModule = new AppModule();
    appModule.configure(consumer);

    expect(apply).toHaveBeenCalledWith(RequestLoggerMiddleware);
    expect(forRoutes).toHaveBeenCalledWith('*');
  });
});

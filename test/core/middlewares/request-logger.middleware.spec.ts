import { RequestLoggerMiddleware } from '@core/middlewares/request-logger.middleware';

describe('RequestLoggerMiddleware', () => {
  it('should register finish listener and call next', () => {
    const middleware = new RequestLoggerMiddleware();
    const next = jest.fn();
    const on = jest.fn();

    const req = {
      method: 'GET',
      originalUrl: '/api/v1/users',
    } as any;

    const res = {
      statusCode: 200,
      on,
    } as any;

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);

    middleware.use(req, res, next);

    expect(on).toHaveBeenCalledWith('finish', expect.any(Function));
    expect(next).toHaveBeenCalledTimes(1);

    const finishCallback = on.mock.calls[0][1] as () => void;
    finishCallback();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('GET /api/v1/users -> 200'));
    logSpy.mockRestore();
  });
});

import { PrismaService } from '@core/database/prisma.service';

describe('PrismaService lifecycle', () => {
  it('onModuleInit should call $connect', async () => {
    const connect = jest.fn().mockResolvedValue(undefined);

    await PrismaService.prototype.onModuleInit.call({
      $connect: connect,
    });

    expect(connect).toHaveBeenCalledTimes(1);
  });

  it('onModuleDestroy should call $disconnect', async () => {
    const disconnect = jest.fn().mockResolvedValue(undefined);

    await PrismaService.prototype.onModuleDestroy.call({
      $disconnect: disconnect,
    });

    expect(disconnect).toHaveBeenCalledTimes(1);
  });

  it('enableShutdownHooks should delegate to app.enableShutdownHooks', () => {
    const app = {
      enableShutdownHooks: jest.fn(),
    } as any;

    PrismaService.prototype.enableShutdownHooks.call({}, app);

    expect(app.enableShutdownHooks).toHaveBeenCalledTimes(1);
  });
});

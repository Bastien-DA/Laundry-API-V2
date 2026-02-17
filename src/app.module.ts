import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from '@core/config/env.validation';
import { AuthModule } from '@features/auth/auth.module';
import { RequestLoggerMiddleware } from '@core/middlewares/request-logger.middleware';
import { DatabaseModule } from '@core/database/database.module';
import { LaundryModule } from '@features/laundry/laundry.module';
import { UserModule } from '@features/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
    AuthModule,
    DatabaseModule,
    LaundryModule,
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}

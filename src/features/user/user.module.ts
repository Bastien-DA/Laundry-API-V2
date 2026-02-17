import { Module } from '@nestjs/common';
import { UserController } from '@features/user/interface/http/user.controller';
import { UserService } from '@features/user/application/services/user.service';
import { userProviders } from '@features/user/infrastructure/di/user.providers';

@Module({
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})
export class UserModule {}

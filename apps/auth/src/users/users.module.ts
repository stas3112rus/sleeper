import { Module } from '@nestjs/common';
import { UsersController } from 'apps/auth/src/users/users.controller';
import { UsersService } from './users.service';
import {
  DatabaseModule,
  LoggerModule,
  UsersDocument,
  UsersSchema,
} from '@app/common';
import { UserRepository } from 'apps/auth/src/users/users.repository';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UsersDocument.name, schema: UsersSchema },
    ]),
    LoggerModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  exports: [UsersService],
})
export class UsersModule {}

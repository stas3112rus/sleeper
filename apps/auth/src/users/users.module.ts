import { Module } from '@nestjs/common';
import { UsersController } from 'apps/auth/src/users/users.controller';
import { UsersService } from './users.service';
import { DatabaseModule, LoggerModule } from '@app/common';
import {
  UsersDocument,
  UsersSchema,
} from 'apps/auth/src/users/models/user.schema';
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

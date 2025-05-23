import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsersDocument } from '@app/common';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository extends AbstractRepository<UsersDocument> {
  protected readonly logger = new Logger(UserRepository.name);

  constructor(
    @InjectModel(UsersDocument.name) usersModule: Model<UsersDocument>,
  ) {
    super(usersModule);
  }
}

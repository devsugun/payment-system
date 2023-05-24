import { Module } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { DatabaseService } from './database/database.service';

@Module({
  providers: [UserService, DatabaseService],
})
export class UserModule {}

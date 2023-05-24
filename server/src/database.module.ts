import { Module } from '@nestjs/common';
import { DatabaseConnection } from './database.connection';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseConnection,
    }),
  ],
  providers: [DatabaseConnection],
  exports: [DatabaseConnection], // Export DatabaseConnection
})
export class DatabaseModule {}

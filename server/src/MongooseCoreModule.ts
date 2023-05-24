import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseCoreModuleProvider } from './mongoose-core-module.provider';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://devsegun:Cat-1013@cluster0.ivbooq0.mongodb.net/?retryWrites=true&w=majority'),
  ],
  providers: [MongooseCoreModuleProvider],
})
export class MongooseCoreModule {}


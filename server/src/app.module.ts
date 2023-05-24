import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://devsegun:Cat-1013@cluster0.ivbooq0.mongodb.net/bank?retryWrites=true&w=majority', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UserModule, // Include the UsersModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';
import { UserSeederService } from './users/user-seeder.service';
import { User } from './schemas/user.schema';
import { v4 as uuidv4 } from 'uuid';
import { TransactionService } from './Transactions/transaction.service';

interface TransactionData {
  id: string;
  senderId: string;
  recipientId: string;
  amount: number;
  date: Date;
  user: User & { token: string }; // Include the 'token' property in the User object
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const userService = app.get(UsersService);
  const userSeeder = app.get(UserSeederService);
  const transactionService = app.get(TransactionService);

  await userSeeder.seed();

  const existingUser = await userService.findOneByPhoneNumber('1234567890');
  if (!existingUser) {
    const newUser: User = {
      id: uuidv4(),
      name: 'John Doe',
      phoneNumber: '1234567890',
      password: 'password',
      balance: 0,
      transactions: [],
      token: '',
    };

    const createdUser: User = await userService.create(newUser);
    console.log('Created user:', createdUser);
  }
  
  const transaction: TransactionData = {
    id: uuidv4(),
    senderId: existingUser.id,
    recipientId: 'recipientId',
    amount: 100,
    date: new Date(),
    user: { ...existingUser, token: '' }, // Include the 'token' property
  };

  await app.listen(3000);
}

bootstrap();

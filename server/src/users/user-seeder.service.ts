import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../schemas/user.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserSeederService {
  constructor(private readonly usersService: UsersService) {}

  async seed(): Promise<void> {
    const existingUser = await this.usersService.findOneByPhoneNumber('1234567890');
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

      const createdUser = await this.usersService.create(newUser);
      console.log('Created user:', createdUser);
    }
  }
}

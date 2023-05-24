import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';


@Injectable()
export class UsersService {
  createUser(_user: User) {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async findOneByPhoneNumber(phoneNumber: string): Promise<User | null> {
    return this.userModel.findOne({ phoneNumber }).exec();
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}

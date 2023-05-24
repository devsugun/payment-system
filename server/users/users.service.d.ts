import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
export declare class UsersService {
    private readonly userModel;
    createUser(_user: User): void;
    constructor(userModel: Model<User>);
    findOneByPhoneNumber(phoneNumber: string): Promise<User | null>;
    create(user: User): Promise<User>;
}

import { Model } from 'mongoose';
import { User } from '../interfaces/user.interface';
export declare class UserModel {
    private readonly userModel;
    static schema: any;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    create(user: User): Promise<User>;
    update(id: string, user: User): Promise<User>;
    delete(id: string): Promise<User>;
}
export { User };

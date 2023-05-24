import { User } from './user.interface';
export declare class UserService {
    private users;
    createUser(user: User): User;
    findAllUsers(): User[];
    findUserById(id: string): User;
    updateUser(id: string, updatedUser: User): User;
    deleteUser(id: string): boolean;
}

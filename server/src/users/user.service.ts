import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  findAllUsers(): User[] {
    return this.users;
  }

  findUserById(id: string): User {
    return this.users.find(user => user.id === id);
  }

  updateUser(id: string, updatedUser: User): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      return this.users[userIndex];
    }
    return null;
  }

  deleteUser(id: string): boolean {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }
}

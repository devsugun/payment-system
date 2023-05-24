import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../schemas/user.schema';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  validateUserById(userId: string) {
      throw new Error('Method not implemented.');
  }
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(phoneNumber: string, password: string): Promise<User | null> {
    const user = await this.usersService.findOneByPhoneNumber(phoneNumber);
    if (user && user.password === password) {
      return user as User; // Cast the user object as User type
    }
    return null;
  }
  
 

  async login(phoneNumber: string, password: string): Promise<string> {
    const user = await this.usersService.findOneByPhoneNumber(phoneNumber);
    if (user && user.password === password) {
      const payload: JwtPayload = { userId: user.id };
      return this.jwtService.sign(payload);
    }
    throw new Error('Invalid credentials');
  }

  async verifyToken(token: string): Promise<JwtPayload | null> {
    try {
      const payload = this.jwtService.verify(token);
      return payload as JwtPayload;
    } catch (error) {
      return null;
    }
  }
}

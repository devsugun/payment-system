import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../schemas/user.schema';
import { JwtPayload } from './jwt-payload.interface';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    validateUserById(userId: string): void;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(phoneNumber: string, password: string): Promise<User | null>;
    login(phoneNumber: string, password: string): Promise<string>;
    verifyToken(token: string): Promise<JwtPayload | null>;
}

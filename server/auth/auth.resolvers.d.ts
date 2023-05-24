import { AuthService } from './auth.service';
import { User } from '../schemas/user.schema';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(phoneNumber: string, password: string): Promise<User>;
}

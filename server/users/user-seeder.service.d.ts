import { UsersService } from './users.service';
export declare class UserSeederService {
    private readonly usersService;
    constructor(usersService: UsersService);
    seed(): Promise<void>;
}

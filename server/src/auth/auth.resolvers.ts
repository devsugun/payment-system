import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from '../schemas/user.schema';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async login(@Args('phoneNumber') phoneNumber: string, @Args('password') password: string): Promise<User> {
    // Pass the phoneNumber and password to the login method of AuthService
    const token: string = await this.authService.login(phoneNumber, password);

    // Create a User object with the provided phoneNumber
    const loggedInUser: User = {
      phoneNumber,
      id: '',
      name: '',
      balance: 0,
      transactions: [],
      password: '',
      token: '',
    };

    // Attach the token to the user object
    loggedInUser.token = token;

    // Return the logged-in user
    return loggedInUser;
  }
}

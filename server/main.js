"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const users_service_1 = require("./users/users.service");
const user_seeder_service_1 = require("./users/user-seeder.service");
const uuid_1 = require("uuid");
const transaction_service_1 = require("./Transactions/transaction.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const userService = app.get(users_service_1.UsersService);
    const userSeeder = app.get(user_seeder_service_1.UserSeederService);
    const transactionService = app.get(transaction_service_1.TransactionService);
    await userSeeder.seed();
    const existingUser = await userService.findOneByPhoneNumber('1234567890');
    if (!existingUser) {
        const newUser = {
            id: (0, uuid_1.v4)(),
            name: 'John Doe',
            phoneNumber: '1234567890',
            password: 'password',
            balance: 0,
            transactions: [],
            token: '',
        };
        const createdUser = await userService.create(newUser);
        console.log('Created user:', createdUser);
    }
    const transaction = {
        id: (0, uuid_1.v4)(),
        senderId: existingUser.id,
        recipientId: 'recipientId',
        amount: 100,
        date: new Date(),
        user: Object.assign(Object.assign({}, existingUser), { token: '' }),
    };
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
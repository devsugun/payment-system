"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSeederService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const uuid_1 = require("uuid");
let UserSeederService = class UserSeederService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async seed() {
        const existingUser = await this.usersService.findOneByPhoneNumber('1234567890');
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
            const createdUser = await this.usersService.create(newUser);
            console.log('Created user:', createdUser);
        }
    }
};
UserSeederService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UserSeederService);
exports.UserSeederService = UserSeederService;
//# sourceMappingURL=user-seeder.service.js.map
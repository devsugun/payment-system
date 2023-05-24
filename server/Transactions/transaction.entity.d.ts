import { User } from '../users/user.entity';
export declare class Transaction {
    id: number;
    amount: number;
    date: Date;
    user: User;
}

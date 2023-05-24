import { Transaction } from '../Transactions/transaction.entity';
export declare class User {
    id: number;
    name: string;
    phoneNumber: string;
    password: string;
    balance: number;
    transactions: Transaction[];
}

import { Transaction } from './transaction.entity';
export declare class TransactionService {
    private transactions;
    clear: any;
    findAll(): Promise<Transaction[]>;
    create(transaction: Transaction): Promise<Transaction>;
}

import { Injectable } from '@nestjs/common';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
  private transactions: Transaction[] = [];
  clear: any;

  findAll(): Promise<Transaction[]> {
    return Promise.resolve(this.transactions);
  }

  create(transaction: Transaction): Promise<Transaction> {
    const createdTransaction: Transaction = { ...transaction };
    this.transactions.push(createdTransaction);
    return Promise.resolve(createdTransaction);
  }
}

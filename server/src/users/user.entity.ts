import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Transaction } from '../Transactions/transaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @Column()
  balance: number;

  @OneToMany(() => Transaction, transaction => transaction.user)
  transactions: Transaction[];
}

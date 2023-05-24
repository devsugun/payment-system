import { Schema, Document } from 'mongoose';
import { Transaction } from 'src/Transactions/transactions.interface';

export interface User extends Document {
  id: string;
  name: string;
  phoneNumber: string;
  password: string;
  balance: number;
  transactions: Transaction[];
  token?: number; // Make the token property optional
}

export const UserSchema = new Schema<User>({
  id: String,
  name: String,
  phoneNumber: String,
  password: String,
  balance: Number,
  transactions: [Schema.Types.Mixed],
});

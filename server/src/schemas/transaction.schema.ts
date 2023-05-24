// schemas/transaction.schema.ts

import { Schema, Document } from 'mongoose';

export interface Transaction extends Document {
  id: string;
  senderId: string; // Add senderId property
  recipientId: string; // Add recipientId property
  amount: number;
}

export const TransactionSchema = new Schema<Transaction>({
  id: { type: String, required: true },
  senderId: { type: String, required: true },
  recipientId: { type: String, required: true },
  amount: { type: Number, required: true },
});

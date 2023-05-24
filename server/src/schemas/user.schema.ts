import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  password: string;

  @Prop()
  balance: number;

  @Prop()
  transactions: string[];
    token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

import { Injectable } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Injectable()
export class DatabaseService {
  constructor() {}

  async connect(): Promise<void> {
    try {
      await MongooseModule.forRoot('mongodb+srv://devsegun:Cat-1013@cluster0.ivbooq0.mongodb.net/?retryWrites=true&w=majority');
      console.log('Connected to the database');
    } catch (error) {
      console.error('Failed to connect to the database', error);
    }
  }
}

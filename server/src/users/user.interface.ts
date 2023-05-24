export interface User {
    id: string;
    name: string;
    phoneNumber: string;
    password: string;
    balance: number;
    transactions: string[]; // Assuming transaction IDs are stored as strings
  }
  
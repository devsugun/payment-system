export interface Transaction {
    id: string;
    amount: number;
    senderId: string;
    description: string;
    recipientId: string;
}

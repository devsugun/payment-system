import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Transaction.css';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Transactions History</h1>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>Amount: {transaction.amount}</p>
          <p>Type: {transaction.type}</p>
          <p>Date: {transaction.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Transactions;

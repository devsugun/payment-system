import React, { useState } from 'react';
import axios from 'axios';
import './Deposit.css';

const Deposit = () => {
  const [amount, setAmount] = useState('');

  const handleDeposit = async () => {
    try {
      const response = await axios.post('/api/deposit', { amount });
      console.log(response.data); // Display success message or update user balance
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Deposit</h1>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default Deposit;

import React, { useState } from 'react';
import axios from 'axios';
import './Withdraw.css';

const Withdraw = () => {
  const [amount, setAmount] = useState('');

  const handleWithdraw = async () => {
    try {
      const response = await axios.post('/api/withdraw', { amount });
      console.log(response.data); // Display success message or update user balance
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Withdraw</h1>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Withdraw;

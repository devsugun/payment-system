import React, { useState } from 'react';
import axios from 'axios';
import  './Signin.css';

const Signin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    try {
      const response = await axios.post('/api/signin', {
        phoneNumber,
        password,
      });
      console.log(response.data); // Save the token and redirect to user dashboard
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Signin</h1>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignin}>Sign In</button>
    </div>
  );
};

export default Signin;

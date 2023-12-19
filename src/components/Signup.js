import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    // Add other form fields (email, mobile, etc.) as needed
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/signup',
        formData
      );
      const data = await response.data;

      if (data) {
        alert('Signup successful');
        window.location.href = '/login';
      }
    } catch (error) {
      alert('Please fill both username and password');
      console.error(error); // Handle error
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        {/* Add other form fields */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

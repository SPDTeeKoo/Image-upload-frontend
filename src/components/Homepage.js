import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  }, []);
  return <div>Homepage</div>;
};

export default Homepage;

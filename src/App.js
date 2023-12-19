import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Homepage from './components/Homepage';
import NewMoment from './components/NewMoment';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/newmoment" element={<NewMoment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

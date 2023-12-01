// AppRoutes.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const AppRoutes = () => {
  const [users, setUsers] = useState([]);

  const handleSignUp = (userData) => {
    // Store user data
    setUsers([...users, userData]);
    alert('User signed up successfully!');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login users={users} setUsers={setUsers} />}
        />
        <Route
          path="/signup"
          element={<Signup onSignUp={handleSignUp} setUsers={setUsers} />}
        />
        <Route
          path="/Login"
          element={<Login users={users} setUsers={setUsers} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

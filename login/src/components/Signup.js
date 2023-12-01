import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = ({ users = [], onSignUp, setUsers }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    // Validate form fields
    if (!formData.username || !formData.password) {
      setError('Please fill in both username and password.');
      return;
    }

  

    // Check if the user already exists
    const existingUser = users.find(user => user.username === formData.username);
    if (existingUser) {
      setError('You already have an account. Please sign in.');
      return;
    }

    setError('');

    onSignUp(formData);

    // Update the users state in the parent component using functional form
    setUsers((prevUsers) => [...prevUsers, formData]);
    
    console.log('Form Data:', formData);

    // You can also perform additional actions here, such as sending data to a server

    // Reset form data
    setFormData({
      username: '',
      password: '',
    });
  };
  

  return (
    <div className="signup-form">
      <form>
        <div>
          <h2>Signup Here</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div>
          {/* Use onClick to trigger the signup process */}
          <button type="button" onClick={handleSignUp}>
            Signup
          </button>
        </div>
        <div>
          Already have an account? Login here <br />
          <Link to="/Login">
            <button type="button">Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;

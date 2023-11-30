import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignIn = () => {
        // You can perform actions here with the form data, such as sending it to a server
        console.log('Form Data:', formData);
    };

    return (
        <div className="login-form">
            <form>
                <div>
                    <h2>Login Here</h2>
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
                <div>
                    <button type="button" onClick={handleSignIn}>
                        Sign in
                    </button>
                </div>
                <div>
                    New member? Signup here <br />
                <Link to="/Signup">
                <button type="button">Sign up</button>
                </Link>
            </div>
        </form>
    </div>
  );
};

export default Login;

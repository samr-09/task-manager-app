import React from 'react';
import '../App.css';

const Login = () => {
    return (
        <div className="main-content">
            <h1>Login</h1>
            <form className="form-container">
                <input type="email" placeholder="Email" className="form-input" />
                <input type="password" placeholder="Password" className="form-input" />
                <button type="submit" className="form-button">Login</button>
            </form>
        </div>
    );
};

export default Login;

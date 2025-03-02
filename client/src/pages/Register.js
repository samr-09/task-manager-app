import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent page reload
        console.log('Registering user:', { name, email, password });

        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                name,
                email,
                password
            });

            console.log('Registration successful:', response.data);
            alert('Registration successful!');

            // Optional: Call email confirmation logic if needed
            sendConfirmationEmail(email);

            // Clear form after successful registration
            setName('');
            setEmail('');
            setPassword('');

        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message);
            alert('Registration failed! Check console for details.');
        }
    };

    const sendConfirmationEmail = (email) => {
        console.log(`Sending confirmation email to ${email}`);
        // This is just a placeholder. In real apps, you can call another API to send an email.
    };

    return (
        <div className="main-content">
            <h1>Register</h1>
            <form className="form-container" onSubmit={handleSubmit} autoComplete="off">
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="form-input" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    autoComplete="off" 
                    name="fullNameRandom"
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="form-input" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    autoComplete="off" 
                    name="userEmailRandom123"
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="form-input" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    autoComplete="new-password" 
                    name="userPasswordRandom456"
                    required 
                />
                <button type="submit" className="form-button">Register</button>
            </form>
        </div>
    );
};

export default Register;

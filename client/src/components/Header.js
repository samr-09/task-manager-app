import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Task Manager</div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/tasks">Tasks</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
};

export default Header;

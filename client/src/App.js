import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import { TaskProvider } from './context/TaskContext';
import Header from './components/Header';  // Add this line
import './App.css';  // Ensure global CSS is applied

function App() {
    return (
        <div className="app-container"> {/* Optional wrapper if you want consistent styling */}
            <Header />  {/* Add Header here so it shows on all pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tasks" element={<Tasks />} />
            </Routes>
        </div>
    );
}

export default App;

import React, { createContext, useState, useContext } from 'react';

// Create Context
const TaskContext = createContext();

// Custom Hook (optional, just for convenience)
export const useTasks = () => useContext(TaskContext);

// Provider Component
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};

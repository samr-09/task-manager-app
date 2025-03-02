import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleAddTask = () => {
        if (taskName && deadline) {
            const newTask = { 
                name: taskName, 
                deadline, 
                completed: false // Initially task is not completed
            };
            setTasks([...tasks, newTask]);
            setTaskName('');
            setDeadline('');
            setShowForm(false);
        } else {
            alert('Please fill all fields!');
        }
    };

    const handleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const renderAnimatedText = (text) => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                {text.split('').map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        style={{ fontSize: '32px', fontWeight: 'bold' }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        );
    };

    return (
        <div className="home-container">
            {/* Animated Welcome Text */}
            {renderAnimatedText("Welcome to Task Manager")}

            <p>Manage your tasks efficiently!</p>

            {/* Add Task Button */}
            <button className="add-task-btn" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Close Form' : 'Add Task'}
            </button>

            {/* Task Form */}
            {showForm && (
                <div className="task-form">
                    <input
                        type="text"
                        placeholder="Task Name"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="form-input"
                    />
                    <input
                        type="datetime-local"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="form-input"
                    />
                    <button onClick={handleAddTask} className="form-button">
                        Add Task
                    </button>
                </div>
            )}

            {/* Task Table */}
            {tasks.length > 0 && (
                <div className="task-table-container">
                    <table className="task-table">
                        <thead>
                            <tr>
                                <th>Complete</th>
                                <th>Task Name</th>
                                <th>Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => handleTaskCompletion(index)}
                                        />
                                    </td>
                                    <td style={{
                                        textDecoration: task.completed ? 'line-through' : 'none'
                                    }}>
                                        {task.name}
                                    </td>
                                    <td>
                                        {task.completed ? 'Done' : new Date(task.deadline).toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Home;

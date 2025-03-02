import React, { useState } from 'react';
import '../App.css';

const Tasks = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Complete project report', status: 'Pending' },
        { id: 2, title: 'Team meeting at 4PM', status: 'Completed' },
        { id: 3, title: 'Revise React concepts', status: 'In Progress' },
    ]);

    return (
        <div className="main-content">
            <h1>Your Tasks</h1>
            <div className="task-list">
                {tasks.map(task => (
                    <div key={task.id} className={`task-card ${task.status.toLowerCase()}`}>
                        <h3>{task.title}</h3>
                        <p>Status: <span className="task-status">{task.status}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;

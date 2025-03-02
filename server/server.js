const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());                // To allow requests from frontend (http://localhost:3000)
app.use(bodyParser.json());      // Parse incoming JSON requests

// Dummy database (in real apps, you will use MongoDB, MySQL, etc.)
const users = [];

// Register Route
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists (for demo only - in real apps, query your database)
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'User already registered with this email' });
    }

    // Save user to "database" (in-memory array here)
    const newUser = { name, email, password }; // In real life, hash the password before saving
    users.push(newUser);

    console.log('New user registered:', newUser);

    res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

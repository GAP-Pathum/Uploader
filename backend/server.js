const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/uploads', express.static('uploads'));

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

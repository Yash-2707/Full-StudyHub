const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/dbConnection');
const router = require('./routes/route');
const Feedback = require('./model/feedback'); // Import Feedback model

// Load environment variables from .env file
dotenv.config();

// Enable CORS with proper configuration
app.use(cors({
    origin: [process.env.FRONTEND_URL], // FRONTEND_URL should match where your frontend is hosted
    methods: ["POST"],
    credentials: true
}));

// Connect to the database
dbConnection();

// Middleware to parse incoming JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// Feedback route to handle feedback submission
app.post('/feedback', async (req, res) => {
    const { email, feedback } = req.body;

    // Check if both fields are provided
    if (!email || !feedback) {
        return res.status(400).json({ success: false, message: 'Please fill out all required fields.' });
    }

    try {
        // Save feedback to the database
        await Feedback.create({ email, feedback });
        res.status(200).json({ success: true, message: 'Feedback received!' });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ success: false, message: 'An error occurred while saving your feedback.' });
    }
});

// Use other routes from the router
app.use('/', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});

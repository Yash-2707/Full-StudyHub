const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    feedback: {  
        type: String,
        required: true,
        maxlength: [4000, 'Feedback cannot exceed 1000 characters'], 
        default: ""
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;

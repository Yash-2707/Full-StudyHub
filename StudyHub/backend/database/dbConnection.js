const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "StudyHub"
    })
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log("Error connecting to the database:", err.message);
    });
};

module.exports = dbConnection; // Make sure this is module.exports

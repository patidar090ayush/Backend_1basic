const mongoose = require('mongoose');

// Connect to MongoDB
// Set up your MongoDB connection string

function connectDB() {
    mongoose.connect("mongodb+srv://ayush:NiD0KOCC3EfNawiv@cluster0.hukzw0h.mongodb.net/cohort")
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
}

module.exports = { connectDB };

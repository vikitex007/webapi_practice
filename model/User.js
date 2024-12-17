const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Name is required
        trim: true      // Removes leading/trailing whitespaces
    },
    email: {
        type: String,
        required: true,
        unique: true,   // Email must be unique
        lowercase: true // Convert to lowercase
    },
    password: {
        type: String,
        required: true,
        minlength: 6    // Minimum password length
    },
    age: {
        type: Number,
        min: 0,         // Minimum age
        max: 120        // Maximum age
    },
    isActive: {
        type: Boolean,
        default: true   // Default value is true
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically set the current date
    }
});

// Create the User Model
const User = mongoose.model('users', userSchema);

module.exports = User;
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    // name:String,
    name: {
        type: String,
        required: true, // Ensure name is required
        minLength: 3, // Minimum length of 3 characters
        trim:true // Trim whitespace from both ends
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure email is unique(primary key)
    },
    age:{
        type: Number,
        min: 1, // Minimum age of 0
        max: 124 // Maximum age of 120
    },
    DOB:{
        type:Date,
       }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
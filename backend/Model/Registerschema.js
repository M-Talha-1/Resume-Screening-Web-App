import mongoose from "mongoose";

// Define the user schema
const regSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true // Ensures that the email is unique
    },
    password: {
        type: String,
        required: true
    }
});

// Create a model for the user schema, using the collection name 'user'
const Usermodel = mongoose.model('user', regSchema);
export default Usermodel;

import express from 'express';
import dotenv from 'dotenv';
import Dbconn from './Connection/Dbconn.js';
import Usermodel from './Model/Registerschema.js';
import bcrypt from 'bcrypt';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// Connect to the database
Dbconn();

// Registration route
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: "Please fill all the fields" });
    }

    try {
        const checkemail = await Usermodel.findOne({ email });
        if (checkemail) {
            return res.status(400).send({ message: "Email already exists" });
        }

        const hashedpassword = await bcrypt.hash(password, 10);
        const data = await new Usermodel({ email, password: hashedpassword }).save();
        res.status(201).send({ message: "Registration successful", data });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error. Please try again later." });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: "Please fill all the fields" });
    }

    try {
        const user = await Usermodel.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: "Invalid email or email is not registered" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send({ message: "Invalid password" });
        }

        res.status(200).send({ message: "Login successful!" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error. Please try again later." });
    }
});


// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

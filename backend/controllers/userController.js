import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import validator from "validator";

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if the user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User Doesn't Exist" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" });
        }

        // Create and return JWT token
        const token = createToken(user._id);
        return res.json({ success: true, token });

    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: "Server Error" });
    }
};


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET); // Added expiration time
};

const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // Check if the user exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User Already Exists" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please Enter Valid Email" });
        }

        // Validate strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please Enter a Strong Password" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({
            name:name,
            email:email,
            password: hashedPassword,
        });

        // Save user to database
        const user = await newUser.save();

        // Create and send token

        const token = createToken(newUser._id);
        res.json({ success: true, token });

    } catch (error) {
        console.error(error);
         res.json({ success: false, message: "Server Error" });
    }
};

export { loginUser, registerUser };



















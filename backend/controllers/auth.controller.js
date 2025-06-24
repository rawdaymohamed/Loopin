import User from "../models/User.js"
import bcrypt from "bcrypt";
export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user
        // hash password before saving
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, salt); 

        const newUser = new User({  
            username,
            email,
            password: hashedPassword
        });

        // Save user to database
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({
            email
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }   
        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
    
        // Password is valid, return user data (excluding password)
        const { password: _, ...userData } = user.toObject();
        res.status(200).json(userData);
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
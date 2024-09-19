import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js"; // Make sure this path is correct and your db.js exports connectDB
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


// App configuration
const app = express();
const port = process.env.PORT || 4000; // Use environment variables for flexibility

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors()); // Enables Cross-Origin Resource Sharing

// Connect to the database
connectDB();


// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads')); // Updated path here
app.use("/api/user", userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);


// API Routes
app.get("/", (req, res) => {
    res.send("API is working");
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});


// mongodb+srv://aakarshkumar495:8789369334@cluster0.vwete.mongodb.net/?




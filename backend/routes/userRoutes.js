import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser); // Correctly references registerUser
userRouter.post("/login", loginUser); // Use the correct case: loginUser

export default userRouter;

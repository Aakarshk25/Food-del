import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://aakarshkumar495:8789369334@cluster0.vwete.mongodb.net/FOOD-DEL')
    .then(()=>console.log("DB Connected"));
}

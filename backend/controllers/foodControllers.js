import foodModel from "../models/foodmodel.js";
import fs from 'fs';


// Add food item 
const addFood = async (req,res) => {

    let image_filename = `${req.file.filename}`;  // Fixed template literal
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}
// List all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });  // Fixed typo `succees` to `success`
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {});  // Fixed template literal and removed comma
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}


export { addFood,listFood,removeFood};













// Add food item
// const addFood = async (req, res) => {
//     let image_filename = `${req.file.filename}`;  // Fixed template literal
//     const food = new foodModel({
//         name: req.body.name,
//         description: req.body.description,  // Corrected `rew` to `req`
//         price: req.body.price,
//

// // List all food items
// const listFood = async (req, res) => {
//     try {
//         const foods = await foodModel.find({});
//         res.json({ success: true, data: foods });  // Fixed typo `succees` to `success`
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" });
//     }
// }

// // Remove food item
// const removeFood = async (req, res) => {
//     try {
//         const food = await foodModel.findById(req.body.id);
//         fs.unlink(`uploads/${food.image}`, () => {});  // Fixed template literal and removed comma

//         await foodModel.findByIdAndDelete(req.body.id);
//         res.json({ success: true, message: "Food Removed" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" });
//     }
// }

// export { addFood, listFood, removeFood };



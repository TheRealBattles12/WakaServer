import  express from "express";
import data from "./data.js";
import connectDB from "./db.js"
import User from "./model_folder/usermodel.js";
import Orders from "./model_folder/ordermodel.js";
import router from "./routes/userRoutes.js";
import userRoutes from "./routes/userRoutes.js"
const app = express()
connectDB()
app.get("/", (req, res) => {
    res.send("GoWaka Server works!")
})
app.get("/NewOrder", async(req, res) => {
    const NewOrder = new Orders({
       products: [
           {
            productName: "Jollof Rice",
            quantity: 5,
            price: 87.50  
           },
           {
            productName: "Puff Puff",
            quantity: 7,
            price: 25.50  
           },
           {
            productName: "Chicken Suya",
            quantity: 4,
            price: 27.50  
           },
           {
            productName: "Yam and Egg",
            quantity: 6,
            price: 65.50  
           },

       ],
       billingAddress: "123, You'll Never Find Me", 
       PaymentMethod: "Credit Card",
       OrderState: "Completed"
    })
    const savedOrder = await NewOrder.save()
    res.status(201).json(savedOrder)
})
app.use("/api/user", userRoutes)
app.listen("3000", () => {
    console.log("It works fine!")
})
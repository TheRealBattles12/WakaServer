import  express from "express";
import data from "./data.js";
import connectDB from "./db.js"
import User from "./model_folder/usermodel.js";
import Orders from "./model_folder/ordermodel.js";
import router from "./routes/userRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import cors from "cors"
const app = express()
connectDB()
app.get("/", (req, res) => {
    res.send("GoWaka Server works!")
})
app.use(cors({origin: ["http://localhost:5173"]}))

app.use(express.json());
app.use("/api/user", userRoutes)
app.use("/api/", orderRoutes)
app.listen("3000", () => {
    console.log("It works fine!")
})
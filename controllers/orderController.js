import asyncHandler from "express-async-handler";
import User from "../model_folder/usermodel.js";
import Cart from "../model_folder/cartmodel.js";
import Orders from "../model_folder/ordermodel.js";
const deleteFromCart = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user && password == user.password){
        res.send("You are valid!✅")
    }else{
        res.status(401)
        throw new Error ("Oops, this email or password are invalid! ❌")
    }
})
const addToCart = asyncHandler(async(req, res) => {
    const {userId, productName, price, quantity} = req.body
    const newItem = new Cart({
        userId, productName, price, quantity
    })
    const addedCart = await newItem.save()
    res.status(201).json(addedCart)
    
})
const allCartItems = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user && password == user.password){
        res.send("You are valid!✅")
    }else{
        res.status(401)
        throw new Error ("Oops, this email or password are invalid! ❌")
    }
})

const createOrder = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user && password == user.password){
        res.send("You are valid!✅")
    }else{
        res.status(401)
        throw new Error ("Oops, this email or password are invalid! ❌")
    }
})

const updateOrder = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user && password == user.password){
        res.send("You are valid!✅")
    }else{
        res.status(401)
        throw new Error ("Oops, this email or password are invalid! ❌")
    }
})


const registerUser = asyncHandler(async(req, res) => {
    const {email, password, name} = req.body
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(404)
        throw new Error("⚠️Oops, this email address already exists!")
    } 
    const NewUser = new User({
        email,
        password,
        name
    })
    const savedUser = await NewUser.save()
    res.status(201).json(savedUser)
   
})
export { addToCart, deleteFromCart, allCartItems, createOrder, updateOrder}
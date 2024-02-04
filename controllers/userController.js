import asyncHandler from "express-async-handler";
import User from "../model_folder/usermodel.js";
const authUser = asyncHandler(async(req, res) => {
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
    // const {email, password, name} = req.body
    // const userExists = await User.findOne({email})
    // if(userExists){
    //     res.status(404)
    //     throw new Error("⚠️Oops, this email address already exists!")
    // } 
    // const NewUser = new User({
    //     email,
    //     password,
    //     name
    // })
    // const savedUser = await NewUser.save()
    // res.status(201).json(savedUser)
    console.log(req.body)
})
export {authUser, registerUser}
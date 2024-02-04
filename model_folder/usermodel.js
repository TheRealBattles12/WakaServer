import mongoose from "mongoose";
const userschema = mongoose.Schema(
    {
        email: {
            type:String,
            required:true,
            unique:true
            
        }, 
        password: {
            type:String,
            required:true
        },
        name: {
            type:String,
            required:true
        }

    }
) 
const User = mongoose.model("User",userschema)

export default User
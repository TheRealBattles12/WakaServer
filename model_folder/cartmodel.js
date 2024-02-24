import mongoose from "mongoose";
const cartSchema = mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },
        productName: {
            type:String,
            required:true
        },
        price: {
            type:Number,
            required:true
        },
        quantity: {
            type:Number,
            required:true
        }
    }
)
const Cart = mongoose.model("cart", cartSchema)

export default Cart



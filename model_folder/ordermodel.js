import mongoose from "mongoose";
const orderschema = mongoose.Schema(
    {
        userId: {
            type:String,
            required:true
        },
        products: [
            {
              productName: String,
              quantity: Number,
              price: Number,
            },
          ],
        billingAddress: {
            type:String,
            required:true
        },
        PaymentMethod: {
            type:String,
            required:true
        },
        OrderState: {
            type:String,
            required:true
        }
    }
)
const Orders = mongoose.model("Orders", orderschema)

export default Orders



import asyncHandler from "express-async-handler";
import User from "../model_folder/usermodel.js";
import Cart from "../model_folder/cartmodel.js";
import Orders from "../model_folder/ordermodel.js";
const deleteFromCart = asyncHandler(async(req, res) => {
    const { _id} = req.body
    const deleted = await Cart.deleteOne({_id})
    if (deleted) {
        
        console.log(`${deleted.deletedCount} document deleted.`);
        res.status(201).json(deleted)
    }
    else{
        res.status(401)
        throw new Error ("sorry, failed to delete")
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
   const {userId} = req.body
   const allCart = await Cart.find({userId})
   res.status(201).json(allCart)
})

const createOrder = asyncHandler(async(req, res) => {
    const {userId, products, billingAddress, PaymentMethod, OrderState} = req.body
    try {
        const newOrder = new Orders({
            userId, products, billingAddress, PaymentMethod, OrderState
        })
        const addedOrder = await newOrder.save()
        res.status(201).json(addedOrder)    
    } catch (error) {
        res.status(401)
        throw new Error ("Oops, it has failed to add this items into your order!")
    }
    const order = await Orders.findOne({userId})
    
})

const updateOrder = asyncHandler(async(req, res) => {
    const {_id} = req.body
    const order = await Orders.findOne({_id})
    try {
        order.OrderState = "completed"
        const orderApproved = await order.save()
        res.status(201).json(orderApproved)
    } catch (error) {
        res.status(401)
        throw new Error ("Ooops, could not update order!")
    }
    
})

export { addToCart, deleteFromCart, allCartItems, createOrder, updateOrder}
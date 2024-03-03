import express from "express";
import { addToCart, allCartItems, createOrder, deleteFromCart, updateOrder } from "../controllers/orderController.js";

const router = express.Router()
router.get("/cart", allCartItems)
router.post("/cart", addToCart)
router.delete("/cart", deleteFromCart)
router.post("/orders", createOrder)
router.put("/orders", updateOrder)

export default router
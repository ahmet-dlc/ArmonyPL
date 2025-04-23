import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getCart,
  addItemToCart,
  removeItemFromCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.get("/", protect, getCart);
router.post("/item", protect, addItemToCart);
router.delete("/item/:productId", protect, removeItemFromCart);

export default router;

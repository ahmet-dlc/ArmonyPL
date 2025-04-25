import express from "express";
import {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
} from "../controllers/favoriteController.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

router.route("/").get(protect, getFavorites).post(protect, addToFavorites);
router.route("/:productId").delete(protect, removeFromFavorites);

export default router;

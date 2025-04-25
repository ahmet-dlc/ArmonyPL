import User from "../models/User.js";
import Product from "../models/Product.js";

// Add a product to the user's favorites
export const addToFavorites = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.user._id);

    // Check if the product is already in favorites
    if (user.favorites.includes(productId)) {
      return res.status(400).json({ message: "Product is already in favorites" });
    }

    user.favorites.push(productId);
    await user.save();
    res.status(200).json({ message: "Product added to favorites", items: user.favorites });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Fetch the user's favorite products
export const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("favorites");
    res.status(200).json({ items: user.favorites });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Remove a product from the user's favorites
export const removeFromFavorites = async (req, res) => {
  try {
    const { productId } = req.params;
    const user = await User.findById(req.user._id);

    user.favorites = user.favorites.filter(
      (favorite) => favorite.toString() !== productId
    );

    await user.save();
    res.status(200).json({ message: "Product removed from favorites", items: user.favorites });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

import Cart from "../models/Cart.js";

// Get the user's cart
export const getCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await Cart.findOne({ user: userId }).populate("items.product");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add item to the cart
export const addItemToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        items: [{ product: productId, quantity }],
      });
    } else {
      const itemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId
      );

      if (itemIndex === -1) {
        cart.items.push({ product: productId, quantity });
      } else {
        cart.items[itemIndex].quantity += quantity;
      }
    }

    await cart.save();
    const populatedCart = await Cart.findById(cart._id).populate("items.product");
    res.json(populatedCart);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Remove item from the cart
export const removeItemFromCart = async (req, res) => {
  const { productId } = req.params; // Use correct param name
  try {
    const cart = await Cart.findOne({ user: req.user._id }); // Get user's cart
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    // Correctly match item by product ID (handles populated or unpopulated)
    const itemIndex = cart.items.findIndex(item =>
      item.product.toString() === productId ||
      item.product._id?.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    cart.items.splice(itemIndex, 1); // Remove the item
    await cart.save();

    // Populate updated cart to return item list
    const updatedCart = await Cart.findById(cart._id).populate("items.product");
    res.status(200).json({
      message: "Item removed from cart",
      items: updatedCart.items, // ✅ So frontend can update state
    });
  } catch (error) {
    console.error("Error removing item:", error);
    res.status(500).json({ message: "Error removing item from cart" });
  }
};


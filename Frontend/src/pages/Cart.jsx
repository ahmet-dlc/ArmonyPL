// frontend/src/pages/Cart.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import CartCard from "../components/CartCard";
import CheckoutPanel from "../components/CheckoutPanel";
import "./Cart.css";
import BASE_URL from "../utils/api";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BASE_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartItems(res.data.items);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const handleRemove = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `${BASE_URL}/cart/item/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCartItems(res.data.items);
      console.log("Item removed:", res.data);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-layout">
        <CheckoutPanel cartItems={cartItems} />
        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <CartCard key={item._id} item={item} onRemove={handleRemove} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

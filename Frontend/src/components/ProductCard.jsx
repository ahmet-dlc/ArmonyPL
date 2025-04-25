import React from "react";
import axios from "axios";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { name, description, price, image, _id } = product;

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please log in to add items to your cart.");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/cart/item",
        { productId: _id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product added to cart!");
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("Something went wrong while adding the item.");
    }
  };

  const handleAddToFavorites = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please log in to add items to your favorites.");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/favorites",
        { productId: _id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product added to favorites!");
    } catch (error) {
      console.error("Failed to add to favorites:", error);
      alert("Something went wrong while adding the item.");
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="product-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="product-button" onClick={handleAddToFavorites}>
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="product-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

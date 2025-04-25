import React from "react";
import "./CartCard.css"; // Make sure this import exists

const CartCard = ({ item, onRemove }) => {
  return (
    <div className="cart-card">
      <img src={item.product.image} alt={item.product.name} />
      <div className="cart-card-details">
        <h4 className="cart-card-title">{item.product.name}</h4>
        <p className="cart-card-price">Price: ${item.product.price}</p>
        <p className="cart-card-price">Quantity: {item.quantity}</p>
        <p className="cart-card-price">Subtotal: ${item.quantity * item.product.price}</p>
        <button onClick={() => onRemove(item.product._id)}>Remove</button>
      </div>
    </div>
  );
};
export default CartCard;

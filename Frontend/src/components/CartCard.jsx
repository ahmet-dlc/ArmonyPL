// frontend/src/components/CartCard.jsx
import React from "react";

const CartCard = ({ item, onRemove }) => {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
      <h4>{item.product.name}</h4>
      <p>Price: ${item.product.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Subtotal: ${item.quantity * item.product.price}</p>
      <button onClick={() => onRemove(item.product._id)}>Remove</button>
    </div>
  );
};

export default CartCard;

// frontend/src/components/CheckoutPanel.jsx
import React from "react";
import "./CheckoutPanel.css";

const CheckoutPanel = ({ cartItems }) => {
  // Calculate total price and item count (considering quantity)
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Correct total item count
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="checkout-panel">
      <h2>Checkout Summary</h2>
      <p>Total Items: {totalItems}</p> {/* Display total items count */}
      <p>Total Price: ${totalPrice.toFixed(2)}</p> {/* Display total price */}

      <div className="checkout-section">
        <label>Payment Method:</label>
        <select>
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cod">Cash on Delivery</option>
        </select>
      </div>

      <div className="checkout-section">
        <label>Shipping:</label>
        <p>Standard Delivery (3-5 days)</p>
      </div>

      <button className="checkout-button">Proceed to Payment</button>
    </div>
  );
};

export default CheckoutPanel;

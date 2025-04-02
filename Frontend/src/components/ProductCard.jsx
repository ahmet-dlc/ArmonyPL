import React from "react";

const ProductCard = ({ name, description, price, image }) => {
  // Add a fallback for the image if it's missing or undefined
  const productImage = image || "path/to/default-image.jpg"; // Replace with a valid default image path

  return (
    <div className="card">
      <img src={productImage} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;

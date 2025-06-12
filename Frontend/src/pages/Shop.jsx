import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Shop.css";
import BASE_URL from "../utils/api"; // path may vary

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>Explore Our Collection</h1>
        <p>Premium curtains crafted for elegance and comfort.</p>
      </div>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="loading-text">Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Shop;

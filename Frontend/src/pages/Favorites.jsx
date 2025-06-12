import React, { useEffect, useState } from "react";
import axios from "axios";
import FavoriteCard from "../components/FavoriteCard";
import "./Cart.css"; // You can keep this or create a separate Favorites.css if needed
import BASE_URL from "../utils/api";

const Favorites = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const fetchFavorites = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BASE_URL}/favorites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFavoriteItems(res.data.items);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  const handleRemove = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `${BASE_URL}/favorites/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFavoriteItems(res.data.items);
      console.log("Favorite removed:", res.data);
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Favorites</h1>
      <div className="cart-items-container">
        {favoriteItems.length === 0 ? (
          <p>Your favorites list is empty</p>
        ) : (
          favoriteItems.map((item) => (
            <FavoriteCard key={item._id} product={item} onRemove={handleRemove} />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;

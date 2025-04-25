import "./FavoriteCard.css";

const FavoriteCard = ({ product, onRemove }) => {
  return (
    <div className="favorite-card">
      <img src={product.image} alt={product.name} />
      <div className="favorite-card-details">
        <h5 className="favorite-card-title">{product.name}</h5>
        <p className="favorite-card-description">{product.description}</p>
        <p className="favorite-card-price">${product.price}</p>
        <button onClick={() => onRemove(product._id)}>
          Remove from Favorites
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;

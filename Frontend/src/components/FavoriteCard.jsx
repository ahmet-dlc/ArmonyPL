// src/components/FavoriteCard.jsx
const FavoriteCard = ({ product, onRemove }) => {
    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">${product.price}</p>
            <button
              className="btn btn-outline-danger"
              onClick={() => onRemove(product._id)}
            >
              Remove from Favorites
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FavoriteCard;
  
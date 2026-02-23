import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectIsInCart } from "../store/cartSlice";

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const isInCart = useSelector(selectIsInCart(plant.id));

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        image: plant.image,
      })
    );
  };

  return (
    <div className="plant-card">
      <div className="plant-card-img-wrapper">
        <img
          className="plant-card-img"
          src={plant.image}
          alt={plant.name}
          loading="lazy"
        />
        <span className="plant-card-category">{plant.category}</span>
      </div>
      <div className="plant-card-body">
        <h4>{plant.name}</h4>
        <div className="plant-card-price">${plant.price.toFixed(2)}</div>
        <div className="plant-card-actions">
          <button
            className="btn-add-cart"
            onClick={handleAdd}
            disabled={isInCart}
          >
            {isInCart ? "\u2713 Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

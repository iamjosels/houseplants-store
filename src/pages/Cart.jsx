import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import {
  selectCartItemsArray,
  selectTotalItems,
  selectTotalCost,
  increment,
  decrement,
  removeItem,
  clearCart,
} from "../store/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItemsArray);
  const totalItems = useSelector(selectTotalItems);
  const totalCost = useSelector(selectTotalCost);

  const handleCheckout = () => {
    alert("Coming soon! \u2705");
  };

  return (
    <div className="cart-page">
      <Header />

      <div className="cart-hero">
        <h2>Your Cart</h2>
      </div>

      <main className="cart-main">
        {/* Cart Items */}
        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">&#128722;</div>
              <h3>Your cart is empty</h3>
              <p>Looks like you haven't added any plants yet.</p>
              <Link to="/products" className="btn btn-primary">
                Browse Plants
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  className="cart-item-img"
                  src={item.image}
                  alt={item.name}
                />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <div className="cart-item-price">
                    ${item.price.toFixed(2)} / unit
                  </div>
                  <div className="cart-item-controls">
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(decrement(item.id))}
                    >
                      &minus;
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(increment(item.id))}
                    >
                      +
                    </button>
                    <span className="cart-item-subtotal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      className="btn-remove"
                      onClick={() => dispatch(removeItem(item.id))}
                      title="Remove item"
                    >
                      &#10005; Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary Sidebar */}
        <aside className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Items</span>
            <strong>{totalItems}</strong>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <strong style={{ color: "#16a34a" }}>Free</strong>
          </div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <strong>${totalCost.toFixed(2)}</strong>
          </div>

          <button
            className="btn-checkout"
            onClick={handleCheckout}
            disabled={items.length === 0}
          >
            Proceed to Checkout
          </button>

          <div className="cart-summary-links">
            <Link to="/products" className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
              Continue Shopping
            </Link>

            {items.length > 0 && (
              <button
                className="btn-clear"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
}

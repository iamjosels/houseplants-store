import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../store/cartSlice";

export default function Header() {
  const totalItems = useSelector(selectTotalItems);
  const { pathname } = useLocation();

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 20h10" />
          <path d="M10 20c5.5-2.5.8-6.4 3-10" />
          <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
          <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
        </svg>
        GreenNest
      </Link>

      <nav className="header-nav">
        <Link
          to="/products"
          className={`nav-link${pathname === "/products" ? " nav-link-active" : ""}`}
        >
          Products
        </Link>
        <Link
          to="/cart"
          className={`nav-link${pathname === "/cart" ? " nav-link-active" : ""}`}
        >
          Cart
        </Link>
        <Link to="/cart" className="cart-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </nav>
    </header>
  );
}

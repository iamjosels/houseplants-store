import { useNavigate } from "react-router-dom";
import { plants } from "../data/plants";
import PlantCard from "../components/PlantCard";

export default function Landing() {
  const navigate = useNavigate();
  const bestsellers = plants.slice(0, 3);

  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">&#10024; Premium Houseplants</span>
          <h1>
            Bring <span>Nature</span> Into Your Home
          </h1>
          <p>
            Curated houseplants that make your space feel alive&mdash;healthy,
            stylish, and delivered with care to your doorstep.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/products")}
            >
              Shop Collection &rarr;
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                document
                  .getElementById("features")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Plant Varieties</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10k+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-header">
          <h2>Why Choose GreenNest</h2>
          <p>
            We go beyond selling plants&mdash;we help you build a greener life
            at home.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#127793;</div>
            <h3>Carefully Curated</h3>
            <p>
              Each plant is hand-selected for health, beauty, and ease of care
              so you get only the best.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#128230;</div>
            <h3>Safe Delivery</h3>
            <p>
              Custom eco-packaging keeps your plants protected during transit.
              Delivered fresh to your door.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#128218;</div>
            <h3>Plant Care Guides</h3>
            <p>
              Every order includes a care guide tailored to your plants so they
              thrive in your space.
            </p>
          </div>
        </div>
      </section>

      {/* Bestsellers Preview */}
      <section className="bestsellers">
        <div className="section-header">
          <h2>Popular Picks</h2>
          <p>Our customers' most-loved houseplants.</p>
        </div>
        <div className="bestsellers-grid">
          {bestsellers.map((p) => (
            <PlantCard key={p.id} plant={p} />
          ))}
        </div>
        <div className="bestsellers-cta">
          <button
            className="btn btn-outline"
            onClick={() => navigate("/products")}
          >
            View All Plants &rarr;
          </button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Ready to go green?</h2>
        <p>
          Free shipping on orders over $50. Start building your indoor jungle
          today.
        </p>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/products")}
        >
          Start Shopping
        </button>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>GreenNest</h3>
            <p>
              Making spaces greener, one plant at a time. Quality houseplants
              delivered to your door.
            </p>
          </div>
          <div className="footer-links">
            <h4>Shop</h4>
            <ul>
              <li>
                <a href="/products">All Plants</a>
              </li>
              <li>
                <a href="/products">Tropical</a>
              </li>
              <li>
                <a href="/products">Low Light</a>
              </li>
              <li>
                <a href="/products">Flowering</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} GreenNest Houseplants. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

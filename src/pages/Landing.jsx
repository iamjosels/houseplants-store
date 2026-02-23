import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="hero-content">
          <span className="hero-badge">Premium Houseplants</span>
          <h1>Bring Nature Into Your Home</h1>
          <p>
            We curate easy-to-love houseplants that make your space feel
            alive&mdash;healthy, stylish, and delivered with care to your
            doorstep.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/products")}
          >
            Shop Now &rarr;
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
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
            <div className="feature-icon">&#128666;</div>
            <h3>Safe Delivery</h3>
            <p>
              Custom packaging keeps your plants safe during transit. Delivered
              fresh to your door.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#128154;</div>
            <h3>Plant Care Tips</h3>
            <p>
              Every order comes with a care guide tailored to your plants so
              they thrive in your space.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        &copy; {new Date().getFullYear()} GreenNest Houseplants. All rights
        reserved.
      </footer>
    </div>
  );
}

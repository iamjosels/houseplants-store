import Header from "../components/Header";
import { plants, categoryIcons } from "../data/plants";
import PlantCard from "../components/PlantCard";

export default function Products() {
  const categories = Array.from(new Set(plants.map((p) => p.category)));

  return (
    <div className="products-page">
      <Header />

      <div className="products-hero">
        <h2>Shop Houseplants</h2>
        <p>Find the perfect green companion for every room</p>
      </div>

      <main className="products-main">
        {categories.map((cat) => (
          <section key={cat} className="category-section">
            <h3 className="category-title">
              <span className="category-icon">
                {categoryIcons[cat] || "\u{1F33F}"}
              </span>
              {cat}
            </h3>
            <div className="products-grid">
              {plants
                .filter((p) => p.category === cat)
                .map((p) => (
                  <PlantCard key={p.id} plant={p} />
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

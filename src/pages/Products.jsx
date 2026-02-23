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
        {categories.map((cat) => {
          const catPlants = plants.filter((p) => p.category === cat);
          return (
            <section key={cat} className="category-section">
              <div className="category-header">
                <h3 className="category-title">
                  <span className="category-icon">
                    {categoryIcons[cat] || "\u{1F33F}"}
                  </span>
                  {cat}
                </h3>
                <span className="category-count">
                  {catPlants.length} {catPlants.length === 1 ? "plant" : "plants"}
                </span>
              </div>
              <div className="products-grid">
                {catPlants.map((p) => (
                  <PlantCard key={p.id} plant={p} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

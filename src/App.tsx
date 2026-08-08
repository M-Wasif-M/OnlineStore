import { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryTabs, {
  type CategoryFilter
} from "./components/CategoryTabs";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import CartDrawer from "./components/CartDrawer";
import Editorial from "./components/Editorial";
import Footer from "./components/Footer";
import { products } from "./data/products";
import type { Product } from "./types";

export default function App() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  /*
   * Product filtering is kept in App for now.
   * Later, filtering/search can move to the .NET API when the catalog grows.
   */
  const visibleProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="app-shell">
      <Header onSearchChange={setSearchTerm} />
      <main>
        <Hero />

        <section className="shop-section" id="shop">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Curated for now</p>
              <h2>Shop the edit</h2>
            </div>
            <span>{visibleProducts.length} products</span>
          </div>

          <CategoryTabs
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <ProductGrid
            products={visibleProducts}
            onOpenProduct={setSelectedProduct}
          />
        </section>

        <Editorial />
      </main>

      <Footer />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <CartDrawer />
    </div>
  );
}

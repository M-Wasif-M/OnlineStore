import type { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onOpenProduct: (product: Product) => void;
}

export default function ProductGrid({
  products,
  onOpenProduct
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="empty-products">
        <p>No products matched your search.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpen={onOpenProduct}
        />
      ))}
    </div>
  );
}

import type { Product } from "../types";
import Icon from "./Icon";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  onOpen: (product: Product) => void;
}

export default function ProductCard({ product, onOpen }: ProductCardProps) {
  const { addToCart } = useCart();

  /*
   * For products with sizes we open the detail modal instead of guessing
   * which size the customer wants.
   */
  const handleQuickAdd = () => {
    if (product.sizes?.length) {
      onOpen(product);
      return;
    }

    addToCart(product);
  };

  return (
    <article className="product-card">
      <div
        className="product-image-wrap"
        onClick={() => onOpen(product)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter") onOpen(product);
        }}
      >
        <img src={product.image} alt={product.name} className="product-image" />

        {product.badge && <span className="product-badge">{product.badge}</span>}

        <button
          className="wishlist-button"
          type="button"
          aria-label={`Save ${product.name}`}
          onClick={(event) => event.stopPropagation()}
        >
          <Icon name="heart" />
        </button>

        <button
          className="quick-view-button"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onOpen(product);
          }}
        >
          Quick view
        </button>
      </div>

      <div className="product-card-content">
        <div>
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>
        </div>

        <div className="product-card-bottom">
          <div className="price-row">
            <span className="price">{product.price} kr</span>
            {product.oldPrice && (
              <span className="old-price">{product.oldPrice} kr</span>
            )}
          </div>

          <button
            className="add-button"
            type="button"
            onClick={handleQuickAdd}
            aria-label={`Add ${product.name} to cart`}
          >
            <Icon name="plus" />
          </button>
        </div>
      </div>
    </article>
  );
}

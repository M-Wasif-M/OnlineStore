import { useEffect, useState } from "react";
import type { Product } from "../types";
import Icon from "./Icon";
import { useCart } from "../context/CartContext";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({
  product,
  onClose
}: ProductModalProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();

  useEffect(() => {
    setSelectedSize(product?.sizes?.[0]);

    // Prevent page scrolling while the modal is open.
    document.body.style.overflow = product ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  if (!product) return null;

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close product view"
        >
          <Icon name="close" />
        </button>

        <div className="modal-image-column">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="modal-info">
          <p className="eyebrow">{product.category}</p>
          <h2>{product.name}</h2>

          <div className="modal-price">
            <span>{product.price} kr</span>
            {product.oldPrice && <del>{product.oldPrice} kr</del>}
          </div>

          <p className="modal-description">{product.description}</p>

          {product.sizes && (
            <div className="size-section">
              <div className="size-heading">
                <strong>Select size</strong>
                <button type="button">Size guide</button>
              </div>

              <div className="size-list">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={selectedSize === size ? "selected" : ""}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            className="modal-add-button"
            type="button"
            onClick={() => addToCart(product, selectedSize)}
          >
            Add to bag
            <Icon name="bag" />
          </button>

          <div className="product-benefits">
            <span>✓ Secure checkout</span>
            <span>✓ Easy returns</span>
            <span>✓ Fast delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}

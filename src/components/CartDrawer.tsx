import { useEffect } from "react";
import Icon from "./Icon";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    subtotal,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart();

  useEffect(() => {
    if (!isCartOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isCartOpen, closeCart]);

  return (
    <>
      <div
        className={`cart-overlay ${isCartOpen ? "open" : ""}`}
        onClick={closeCart}
      />

      <aside className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <div>
            <p className="eyebrow">Your selection</p>
            <h2>Shopping bag</h2>
          </div>

          <button
            className="icon-button"
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <Icon name="bag" />
              <h3>Your bag is empty</h3>
              <p>Add something you love and it will appear here.</p>
              <button type="button" onClick={closeCart}>
                Continue shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <article
                className="cart-item"
                key={`${item.product.id}-${item.size ?? "default"}`}
              >
                <img src={item.product.image} alt={item.product.name} />

                <div className="cart-item-info">
                  <div className="cart-item-top">
                    <div>
                      <h3>{item.product.name}</h3>
                      {item.size && <p>Size: {item.size}</p>}
                    </div>

                    <button
                      className="remove-button"
                      type="button"
                      onClick={() =>
                        removeFromCart(item.product.id, item.size)
                      }
                    >
                      Remove
                    </button>
                  </div>

                  <div className="cart-item-bottom">
                    <div className="quantity-control">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => {
                          if (item.quantity === 1) {
                            removeFromCart(item.product.id, item.size);
                          } else {
                            decreaseQuantity(item.product.id, item.size);
                          }
                        }}
                      >
                        <Icon name="minus" />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() =>
                          increaseQuantity(item.product.id, item.size)
                        }
                      >
                        <Icon name="plus" />
                      </button>
                    </div>

                    <strong>{item.product.price * item.quantity} kr</strong>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="shipping-progress">
              <p>
                {subtotal >= 1000
                  ? "You unlocked free shipping."
                  : `${1000 - subtotal} kr left for free shipping.`}
              </p>
              <div className="progress-track">
                <span
                  style={{
                    width: `${Math.min((subtotal / 1000) * 100, 100)}%`
                  }}
                />
              </div>
            </div>

            <div className="subtotal-row">
              <span>Subtotal</span>
              <strong>{subtotal} kr</strong>
            </div>

            <p className="cart-note">
              Shipping and taxes are calculated at checkout.
            </p>

            <button className="checkout-button" type="button">
              Checkout
              <Icon name="arrow" />
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

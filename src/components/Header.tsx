import Icon from "./Icon";
import { useCart } from "../context/CartContext";

interface HeaderProps {
  onSearchChange: (value: string) => void;
}

export default function Header({ onSearchChange }: HeaderProps) {
  const { totalItems, openCart } = useCart();

  return (
    <>
      <div className="announcement">
        Gratis frakt rundt hele Norge!
      </div>

      <h1>My Online Store</h1>

      <header  className="site-header">
        
        <a className="brand-mark" href="#top" aria-label="Home">
          <span />
          <span />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#shop">Women</a>
          <a href="#shop">Men</a>
          <a href="#shop">Jewelry</a>
          <a href="#shop">Beauty</a>
        </nav>

        <div className="header-actions">
          <label className="search-box">
            <Icon name="search" />
            <input
              type="search"
              placeholder="Search"
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </label>

          <button
            className="icon-button cart-button"
            type="button"
            onClick={openCart}
            aria-label={`Open cart with ${totalItems} items`}
          >
            <Icon name="bag" />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </button>
        </div>
      </header>
    </>
  );
}

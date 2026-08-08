import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from "react";
import type { CartItem, Product } from "../types";

interface CartContextValue {
  items: CartItem[];
  isCartOpen: boolean;
  totalItems: number;
  subtotal: number;
  addToCart: (product: Product, size?: string) => void;
  increaseQuantity: (productId: number, size?: string) => void;
  decreaseQuantity: (productId: number, size?: string) => void;
  removeFromCart: (productId: number, size?: string) => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  /*
   * Add a new product or increase quantity if the same product/size
   * combination already exists in the cart.
   */
  const addToCart = (product: Product, size?: string) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { product, quantity: 1, size }];
    });

    setIsCartOpen(true);
  };

  const increaseQuantity = (productId: number, size?: string) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number, size?: string) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product.id === productId &&
          item.size === size &&
          item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(
          (item) =>
            !(
              item.product.id === productId &&
              item.size === size &&
              item.quantity <= 0
            )
        )
    );
  };

  const removeFromCart = (productId: number, size?: string) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.product.id === productId && item.size === size)
      )
    );
  };

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      ),
    [items]
  );

  const value: CartContextValue = {
    items,
    isCartOpen,
    totalItems,
    subtotal,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false)
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider.");
  }

  return context;
}

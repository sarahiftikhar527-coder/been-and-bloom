import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

const CART_KEY = "coffee_cart";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem(CART_KEY) || "[]"
      );

      setCartItems(Array.isArray(savedCart) ? savedCart : []);
    } catch {
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      CART_KEY,
      JSON.stringify(cartItems)
    );

    window.dispatchEvent(
      new CustomEvent("coffee-cart-updated", {
        detail: cartItems,
      })
    );
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((current) => {
      const existingIndex = current.findIndex(
        (item) =>
          String(item.id) === String(product.id)
      );

      if (existingIndex !== -1) {
        return current.map((item, index) =>
          index === existingIndex
            ? {
                ...item,
                quantity:
                  Number(item.quantity || 0) +
                  Number(quantity || 1),
              }
            : item
        );
      }

      return [
        ...current,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          image: product.image,
          images: product.images || [product.image],
          price: Number(product.price),
          category: product.category,
          rating: product.rating,
          reviews: product.reviews,
          description: product.description,
          notes: product.notes,
          size: product.size,
          strength: product.strength,
          roast: product.roast,
          preparation: product.preparation,
          quantity: Number(quantity) || 1,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((current) =>
      current.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  };

  const updateQuantity = (id, quantity) => {
    const safeQuantity = Math.max(
      1,
      Math.min(Number(quantity) || 1, 20)
    );

    setCartItems((current) =>
      current.map((item) =>
        String(item.id) === String(id)
          ? {
              ...item,
              quantity: safeQuantity,
            }
          : item
      )
    );
  };

  const increaseQuantity = (id) => {
    setCartItems((current) =>
      current.map((item) =>
        String(item.id) === String(id)
          ? {
              ...item,
              quantity: Math.min(
                Number(item.quantity || 1) + 1,
                20
              ),
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((current) =>
      current.map((item) =>
        String(item.id) === String(id)
          ? {
              ...item,
              quantity: Math.max(
                Number(item.quantity || 1) - 1,
                1
              ),
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + Number(item.quantity || 0),
        0
      ),
    [cartItems]
  );

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total +
          Number(item.price || 0) *
            Number(item.quantity || 0),
        0
      ),
    [cartItems]
  );

  const deliveryFee =
    cartItems.length === 0
      ? 0
      : subtotal >= 50
      ? 0
      : 4.99;

  const total = subtotal + deliveryFee;

  const value = {
    cartItems,
    cart: cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartCount,
    subtotal,
    deliveryFee,
    total,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
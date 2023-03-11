import { useState, createContext, useContext } from 'react';

const CartContext = createContext({
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    const inCart = cartItems.find((product) => product.id === productToAdd.id);
    if (inCart) {
      setCartItems((prev) =>
        prev.map((product) =>
          product.id === productToAdd.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...productToAdd, quantity: 1 }]);
    }
  };

  const totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        addItemToCart,
        cartItems,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

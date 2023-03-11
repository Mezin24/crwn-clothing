import { useState, createContext, useContext } from 'react';

const CartContext = createContext({
  showCart: false,
  setShowCart: () => null,
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContext.Provider value={{ showCart, setShowCart }}>
      {children}
    </CartContext.Provider>
  );
};

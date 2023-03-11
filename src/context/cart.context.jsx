import { useState, createContext, useContext } from 'react';

const CartContext = createContext({
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
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

  const decreaseItemQuantity = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id !== productId
            ? item
            : { ...item, quantity: item.quantity - 1 }
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const deleteProductFromCart = (productId) => {
    setCartItems((prev) => prev.filter((product) => product.id !== productId));
  };

  const totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        addItemToCart,
        decreaseItemQuantity,
        deleteProductFromCart,
        cartItems,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

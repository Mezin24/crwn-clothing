import { useReducer, createContext, useContext } from 'react';
import { createAction } from '../utils/reducer.util';

const CartContext = createContext({
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

const addItem = (cartItems, productToAdd) => {
  const inCart = cartItems.find((product) => product.id === productToAdd.id);
  if (inCart) {
    return cartItems.map((product) =>
      product.id === productToAdd.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const decreaseQuantity = (cartItems, productId) => {
  return cartItems
    .map((item) =>
      item.id !== productId ? item : { ...item, quantity: item.quantity - 1 }
    )
    .filter((item) => item.quantity > 0);
};

const deleteItem = (cartItems, productId) => {
  return cartItems.filter((product) => product.id !== productId);
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_SHOW_CART: 'SET_SHOW_CART',
};

const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_SHOW_CART:
      return {
        ...state,
        showCart: payload,
      };

    default:
      throw new Error(`Unhandled action type ${type} in cart reducer`);
  }
};

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [{ showCart, cartItems, totalQuantity, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItems = (newCartItems) => {
    const newTotalQuantity = newCartItems.reduce(
      (acc, cur) => acc + cur.quantity,
      0
    );
    const newTotalPrice = newCartItems.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice,
      },
    });
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };

  const decreaseItemQuantity = (productId) => {
    const newCartItems = decreaseQuantity(cartItems, productId);
    updateCartItems(newCartItems);
  };

  const deleteProductFromCart = (productId) => {
    const newCartItems = deleteItem(cartItems, productId);
    updateCartItems(newCartItems);
  };

  const setShowCart = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_SHOW_CART, bool));
  };

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

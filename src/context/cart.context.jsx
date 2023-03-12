import { useState, createContext, useContext, useReducer } from 'react';

const CartContext = createContext({
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

export const CART_ACTION_TYPES = {
  ADD_ITEM: 'ADD_ITEM',
  DECREASE_ITEMS: 'DECREASE_ITEMS',
  REMOVE_ITEMS: 'REMOVE_ITEMS',
  TOGGLE_CART: 'TOGGLE_CART',
};

const INITIAL_CART_STATE = {
  showCart: false,
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const calcTotalQuantity = (cartItems) =>
  cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
const calcTotalPrice = (cartItems) =>
  cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM:
      const inCart = state.cartItems.find(
        (product) => product.id === payload.id
      );
      let updatedItems;
      if (inCart) {
        updatedItems = state.cartItems.map((product) =>
          product.id === payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        updatedItems = [...state.cartItems, { ...payload, quantity: 1 }];
      }
      return {
        ...state,
        cartItems: updatedItems,
        totalQuantity: calcTotalQuantity(updatedItems),
        totalPrice: calcTotalPrice(updatedItems),
      };
    case CART_ACTION_TYPES.DECREASE_ITEMS:
      const decreasedItems = state.cartItems
        .map((item) =>
          item.id !== payload ? item : { ...item, quantity: item.quantity - 1 }
        )
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        cartItems: decreasedItems,
        totalPrice: calcTotalPrice(decreasedItems),
        totalQuantity: calcTotalQuantity(decreasedItems),
      };
    case CART_ACTION_TYPES.REMOVE_ITEMS:
      const newItems = state.cartItems.filter((item) => item.id !== payload);

      return {
        ...state,
        cartItems: newItems,
        totalPrice: calcTotalPrice(newItems),
        totalQuantity: calcTotalQuantity(newItems),
      };
    case CART_ACTION_TYPES.TOGGLE_CART:
      return { ...state, showCart: !state.showCart };

    default:
      throw new Error(`Unknown action ${type} in cart reducer`);
  }
};

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);
  const { cartItems, totalPrice, totalQuantity, showCart } = state;

  const addItemToCart = (productToAdd) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_ITEM, payload: productToAdd });
  };

  const decreaseItemQuantity = (productId) => {
    dispatch({ type: CART_ACTION_TYPES.DECREASE_ITEMS, payload: productId });
  };

  const deleteProductFromCart = (productId) => {
    dispatch({ type: CART_ACTION_TYPES.REMOVE_ITEMS, payload: productId });
  };

  const setShowCart = () => dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART });

  return (
    <CartContext.Provider
      value={{
        showCart,
        addItemToCart,
        decreaseItemQuantity,
        deleteProductFromCart,
        cartItems,
        totalQuantity,
        totalPrice,
        setShowCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

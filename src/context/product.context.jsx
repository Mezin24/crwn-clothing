import { useContext, createContext, useState } from 'react';
import SHOP_DATA from '../data/shop-data.json';

const ProductContext = createContext({
  products: [],
});

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  return (
    <ProductContext.Provider
      value={{ products, showCartDropdown, setShowCartDropdown }}
    >
      {children}
    </ProductContext.Provider>
  );
};

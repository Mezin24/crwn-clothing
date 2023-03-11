import { useContext, createContext, useState } from 'react';
import SHOP_DATA from '../data/shop-data.json';

const ProductContext = createContext({
  products: [],
});

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

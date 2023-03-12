import { useContext, createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../firebase/firebase.utils';

const CategoriesContext = createContext({
  categoriesMap: {},
});

export const useCategoriesContext = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    (async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    })();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};

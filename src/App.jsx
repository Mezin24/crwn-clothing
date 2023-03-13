import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layout/root-layout/RootLayout';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import Checkout from './pages/checkout/Checkout';
import CategoriesPreview from './pages/categories-preview/CategoriesPreview';
import Category from './pages/category/Category';
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from './firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import { setCategories } from './store/categories/category.action';
import { getCategoriesAndDocuments } from './firebase/firebase.utils';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArr = await getCategoriesAndDocuments('categories');
      console.log(categoriesArr);
      dispatch(setCategories(categoriesArr));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='shop'>
          <Route index element={<CategoriesPreview />} />
          <Route path=':category' element={<Category />} />
        </Route>
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;

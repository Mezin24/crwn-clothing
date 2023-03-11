import { Routes, Route } from 'react-router-dom';
import RootLayout from './layout/root-layout/RootLayout';
import Home from './pages/Home';
import Shop from './pages/shop/Shop';
import Authentication from './pages/Authentication';
import Checkout from './pages/checkout/Checkout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;

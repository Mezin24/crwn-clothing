import { Routes, Route } from 'react-router-dom';
import RootLayout from './layout/root-layout/RootLayout';
import Home from './pages/Home';
import Authentication from './pages/Authentication';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;

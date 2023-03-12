import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/user.context';
import { CategoriesProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);

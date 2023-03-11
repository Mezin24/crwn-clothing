import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/user.context';
import { ProductProvider } from './context/product.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);

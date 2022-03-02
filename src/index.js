import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './contexts/ProductsContext'
import { FilterProvider } from './contexts/FilterContext'
import { CartProvider } from './contexts/CartContext'
import { UserProvider } from './contexts/UserContext'

ReactDOM.render(
<UserProvider>
<ProductsProvider>
  <CartProvider>
    <FilterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterProvider>    
  </CartProvider> 
  </ProductsProvider> 
  </UserProvider> ,
  document.getElementById('root')
);


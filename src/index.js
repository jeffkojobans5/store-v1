import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './contexts/ProductsContext'
import { FilterProvider } from './contexts/FilterContext'

ReactDOM.render(

  <ProductsProvider>
    <FilterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterProvider>    
  </ProductsProvider> ,
  document.getElementById('root')
);


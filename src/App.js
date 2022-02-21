import React from 'react';
import { Routes , Route  } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import Product from './pages/Product'
import Header from './components/Header'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />      
        <Route path="/products" element={<ProductsPage />} />      
        <Route path="/cart" element={<CartPage />} />      
        <Route path="/product/:id" element={<Product />} />      
      </Routes>
    </>      
  );
}

export default App;

import React from 'react';
import { Routes , Route  } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import Header from './components/Header'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />      
        <Route path="/products" element={<ProductsPage />} />      
      </Routes>
    </>      
  );
}

export default App;

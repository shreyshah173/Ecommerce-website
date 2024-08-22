// import logo from './logo.svg';
import Header from './components/Header';
import React from 'react';
import './App.css';
import Home from './modules/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Productpage from './modules/ProductPage';
import CategoryProduct from './modules/CategroyProducts';
import Cart from './modules/Cart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Productpage />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/categories/:name' element={<CategoryProduct />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

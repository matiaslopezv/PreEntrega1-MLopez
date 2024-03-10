import React from 'react';
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import CartProvider  from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (
    <BrowserRouter>

    <CartProvider>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </CartProvider>
     
    </BrowserRouter>
  )
}

export default App


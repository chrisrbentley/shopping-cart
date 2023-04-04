import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Product from './components/Product';

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App cart={cart} />}
        />
        <Route
          path="/shop"
          element={<Shop cart={cart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} />}
        />
        <Route
          path="/shop/:id"
          element={<Product />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

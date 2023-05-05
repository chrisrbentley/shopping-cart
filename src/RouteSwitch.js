import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop';
import Cart from './components/Cart';

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(1);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App cart={cart} />}
        />
        <Route
          path="/shop"
          element={
            <Shop
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              amount={amount}
              setAmount={setAmount}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

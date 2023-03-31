import React, { useState } from 'react';
import Header from './components/Header';
import '../src/styles/app.css';

function App(props) {
  const { cart } = props;

  console.log(cart);
  console.log('cart');

  return (
    <div className="App">
      <Header cart={cart} />
    </div>
  );
}

export default App;

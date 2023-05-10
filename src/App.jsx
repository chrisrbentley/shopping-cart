import React, { useState } from 'react';
import Header from './components/Header';
import '../src/styles/app.css';

function App(props) {
  const { cart } = props;

  return (
    <div className="App">
      <Header cart={cart} />
      <main id="home-page">
        <img
          src="https://picsum.photos/1000/600"
          id="home-pic"
          alt=""
        />
        <p>This is not a real store.</p>
      </main>
    </div>
  );
}

export default App;

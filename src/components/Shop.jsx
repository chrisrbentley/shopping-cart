import React, { useState, useEffect } from 'react';
import Header from './Header';

function Shop() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch('https://api.storerestapi.com/products', {
      mode: 'cors',
    });
    const productData = await response.json();
    setProducts(productData.data);
    console.log(productData);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      This is the shop
    </div>
  );
}

export default Shop;

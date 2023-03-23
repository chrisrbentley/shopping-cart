import React, { useState, useEffect } from 'react';
import Header from './Header';

function Shop() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch('https://dummyjson.com/products', {
      mode: 'cors',
    });
    const productData = await response.json();
    setProducts(productData.products);
    console.log(productData.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      This is the shop
      <div id="products">
        {products.map((product) => {
          return (
            <div className="product">
              <h3>{product.title}</h3>
              <img
                src={product.images[0]}
                alt=""
                className="product-img"
              />
              <p>${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;

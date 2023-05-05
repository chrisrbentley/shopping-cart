import React, { useState, useEffect } from 'react';
import Header from './Header';
import ShopItem from './ShopItem';
import { Link } from 'react-router-dom';

function Shop(props) {
  const { cart, setCart } = props;

  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products', {
      mode: 'cors',
    });

    const productData = await response.json();
    console.log(productData);
    setProducts(productData);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Header cart={cart} />
      <main id="p-wrapper">
        <div id="products">
          {products.map((product) => {
            return (
              <ShopItem
                product={product}
                cart={cart}
                setCart={setCart}
                key={product.id}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Shop;

import React, { useState, useEffect } from 'react';
import Header from './Header';

function Shop(props) {
  const { cart } = props;

  const [products, setProducts] = useState([]);

  async function getProducts() {
    /* const response = await fetch('https://api.escuelajs.co/api/v1/products', {
      mode: 'cors',
    }); */

    const response = await fetch('https://fakestoreapi.com/products', {
      mode: 'cors',
    });

    const productData = await response.json();
    console.log(productData);
    setProducts(productData);

    /* const slicedData = productData.slice(0, 20);
    setProducts(slicedData);
    console.log(slicedData); */
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div id="store-container">
      <Header cart={cart} />
      <main id="p-wrapper">
        <div id="products">
          {products.map((product) => {
            return (
              <div
                className="product"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt=""
                  className="product-img"
                />
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Shop;

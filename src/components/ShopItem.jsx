import React from 'react';
import { Link } from 'react-router-dom';

function ShopItem(props) {
  const { product, cart, setCart } = props;

  function addToCart(e) {
    console.log('new one');
    console.log(product);

    let updatedCart = [...cart];

    let newProduct = product;
    newProduct.quantity = 1;

    updatedCart.push(product);

    setCart(updatedCart);
  }

  return (
    <div className="shop-item">
      <div
        className="product"
        key={product.id}
        data-testid="card"
      >
        <img
          src={product.image}
          alt=""
          className="product-img"
        />
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ShopItem;

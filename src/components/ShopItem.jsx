import React from 'react';

function ShopItem(props) {
  const { product, cart, setCart } = props;

  function addToCart() {
    let updatedCart = [...cart];

    if (updatedCart.some((obj) => obj.id === product.id)) {
      const productIndex = updatedCart.findIndex(
        (prod) => prod.id === product.id,
      );

      updatedCart[productIndex].quantity =
        updatedCart[productIndex].quantity + 1;

      setCart(updatedCart);
    } else {
      product.quantity = 1;
      updatedCart.push(product);
      setCart(updatedCart);
    }
  }

  return (
    <div
      className="product"
      key={product.id}
      data-testid="card"
    >
      <div className="product-top">
        <img
          src={product.image}
          alt=""
          className="product-img"
        />
      </div>
      <div className="product-bottom">
        <div className="product-details">
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
        </div>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ShopItem;

import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';

// maybe useEffect to render a dom element

function Product(props) {
  const { cart, setCart, amount, setAmount } = props;
  // const [amount, setAmount] = useState(1);

  const params = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`,
    );
    const item = await response.json();
    console.log(item);

    setProduct(item);
  };

  const addToCart = () => {
    let updatedCart = [...cart];

    let newProduct = product;
    newProduct.quantity = 1;
    setProduct(newProduct);

    updatedCart.push(product);

    setCart(updatedCart);
  };

  return (
    <div id="product-component">
      <Header cart={cart} />
      <div id="current-item">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <img
          src={product.image}
          alt=""
          className="product-page-pic"
        />
        <button
          onClick={addToCart}
          id="add-to-cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;

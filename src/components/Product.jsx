import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
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

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img
        src={product.image}
        alt=""
      />
      <div>
        <input
          type="number"
          name=""
          id=""
          placeholder="1"
        />
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;

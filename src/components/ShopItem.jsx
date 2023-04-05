import React from 'react';
import { Link } from 'react-router-dom';

function ShopItem(props) {
  const { product } = props;

  return (
    <div className="shop-item">
      <Link to={`/shop/${product.id}`}>
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
      </Link>
    </div>
  );
}

export default ShopItem;

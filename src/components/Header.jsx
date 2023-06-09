import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const { cart } = props;
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }
    setTotalQuantity(total);
  }, [cart]);

  return (
    <header>
      <h1>
        <Link to={'/'}>My Store</Link>
      </h1>

      <nav id="navbar">
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            {totalQuantity < 1 ? (
              <Link to="/cart">Cart</Link>
            ) : (
              <Link to="/cart">Cart ({totalQuantity})</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

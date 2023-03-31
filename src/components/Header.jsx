import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const { cart } = props;
  console.log(props);

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
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

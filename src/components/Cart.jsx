import React, { useState, useEffect } from 'react';
import Header from './Header';
import CartItem from './CartItem';

function Cart(props) {
  const { cart, setCart } = props;
  const [cartEmpty, setCartEmpty] = useState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length < 1) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
  }, [cart]);

  function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].quantity > 1) {
        for (let j = 0; j < cart[i].quantity; j++) {
          total += cart[i].price;
        }
      } else {
        total += cart[i].price;
      }
    }
    total = total.toFixed(2);
    setTotal(total);
  }

  useEffect(() => {
    calculateTotal();
  });

  return (
    <div id="cart-page">
      <Header cart={cart} />
      {cartEmpty ? (
        <p id="cart-empty">Your cart is empty.</p>
      ) : (
        <div id="cart-wrapper">
          {cart.map((item) => {
            return (
              <CartItem
                item={item}
                cart={cart}
                setCart={setCart}
                key={item.id}
              />
            );
          })}
          <p>Subtotal: ${total}</p>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;

import React, { useState, useEffect } from 'react';
import Header from './Header';

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

  const updateAmount = (e) => {
    let val = Number(e.target.value);
    let id = Number(e.target.dataset.id);
    let tempCart = [...cart];
    let index = tempCart.findIndex((x) => x.id === id);

    tempCart[index].quantity = val;
    setCart(tempCart);
  };

  const removeItem = (e) => {
    const id = Number(e.target.dataset.id);
    const tempCart = [...cart];
    const index = tempCart.findIndex((x) => x.id === id);

    tempCart.splice(index, 1);
    setCart(tempCart);
  };

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
              <div
                className="cart-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt=""
                />
                <p className="cart-item-title">{item.title}</p>
                <p>${parseFloat(item.price * item.quantity).toFixed(2)}</p>

                <div className="item-controls">
                  <input
                    type="number"
                    defaultValue={item.quantity}
                    data-id={item.id}
                    onChange={updateAmount}
                    min={1}
                    name=""
                    id=""
                  />
                  <button
                    data-id={item.id}
                    onClick={removeItem}
                  >
                    Remove
                  </button>
                </div>
              </div>
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

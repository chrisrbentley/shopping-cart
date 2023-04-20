import React from 'react';
import Header from './Header';

function Cart(props) {
  const { cart, setCart, amount, setAmount } = props;

  const updateAmount = (e) => {
    let val = Number(e.target.value);
    let id = Number(e.target.dataset.id);
    let tempCart = cart;

    let item = tempCart.find((x) => x.id === id);
    item.quantity = val;

    setCart(tempCart);
  };

  return (
    <div>
      <Header cart={cart} />
      <h3>Your Cart</h3>
      {cart.map((item) => {
        return (
          <div className="cart-item">
            <img
              src={item.image}
              alt=""
            />
            <p className="cart-item-title">{item.title}</p>
            <input
              type="number"
              // defaultValue={amount}
              defaultValue={item.quantity}
              data-id={item.id}
              onChange={updateAmount}
              name=""
              id=""
            />
            <button>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;

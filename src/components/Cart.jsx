import React from 'react';
import Header from './Header';

function Cart(props) {
  const { cart, setCart } = props;

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
        );
      })}
    </div>
  );
}

export default Cart;

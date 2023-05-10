import React from 'react';

const CartItem = ({ item, cart, setCart }) => {
  console.log(item);

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
    <div className="cart-item">
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
};

export default CartItem;

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Cart from '../components/Cart';

describe('Cart component', () => {
  it('Displays message when cart is empty', () => {
    const fakeCart = [];

    render(
      <BrowserRouter>
        <Cart cart={fakeCart} />
      </BrowserRouter>,
    );

    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
  });

  it('Removes item(s) from cart', () => {});

  it('Renders cart subtotal and checkout button when cart is populated', () => {
    const fakeCart = [
      {
        title: 'Red Shirt',
        id: 1,
        price: 9.99,
        image: 'fake/src',
        quantity: 1,
      },
    ];

    render(
      <BrowserRouter>
        <Cart cart={fakeCart} />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('button', { name: 'Checkout' }),
    ).toBeInTheDocument();

    expect(screen.getByText('Subtotal: $9.99')).toBeInTheDocument();
  });
});

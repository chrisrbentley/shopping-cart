// In Cart test, mock CartItem to make sure not rendered etc
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import CartItem from '../components/CartItem';

describe('CartItem component', () => {
  const fakeItem = {
    title: 'Red Shirt',
    id: 1,
    price: 9.99,
    image: 'fake/src',
    quantity: 3,
  };

  it('Renders item content', () => {
    render(
      <BrowserRouter>
        <CartItem item={fakeItem} />
      </BrowserRouter>,
    );

    expect(screen.getByRole('img')).toHaveAttribute('src', 'fake/src');
    expect(screen.getByText('Red Shirt')).toBeInTheDocument();
    expect(screen.getByText('$29.97')).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toHaveValue(3);
    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument();
  });

  it('Correctly adjusts price based on quantity', () => {
    const fakeItem = {
      title: 'Red Shirt',
      id: 1,
      price: 9.99,
      image: 'fake/src',
      quantity: 1,
    };

    render(
      <BrowserRouter>
        <CartItem item={fakeItem} />
      </BrowserRouter>,
    );

    expect(screen.getByText('$9.99')).toBeInTheDocument();

    fakeItem.quantity = 3;

    render(
      <BrowserRouter>
        <CartItem item={fakeItem} />
      </BrowserRouter>,
    );

    expect(screen.getByText('$29.97')).toBeInTheDocument();
  });
});

/* eslint-disable jest/valid-expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Header component', () => {
  let mockCart = [
    {
      title: 'red shirt',
      id: 1,
      quantity: 1,
    },
    {
      title: 'blue jeans',
      id: 2,
      quantity: 1,
    },
    {
      title: 'iphone',
      id: 3,
      quantity: 2,
    },
  ];

  it('renders correct heading', () => {
    render(
      <BrowserRouter>
        <Header cart="3" />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading').textContent).toMatch(/my store/i);

    expect(screen.getByText('Shop'));
    expect(screen.getByText(/cart/i));
  });

  it('renders correct number of items in cart', () => {
    render(
      <BrowserRouter>
        <Header cart={mockCart} />
      </BrowserRouter>,
    );

    const cartButton = screen.getByRole('link', { name: /cart/i });
    expect(cartButton).toHaveTextContent('Cart (4)');
  });
});

/* eslint-disable jest/valid-expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
  it('renders correct heading', () => {
    render(
      <BrowserRouter>
        <Header cart="3" />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading').textContent).toMatch(/my store/i);

    expect(screen.getByText('Shop'));
  });
});

describe('cart', () => {
  let mockCart = [
    {
      title: 'red shirt',
      id: 1,
    },
    {
      title: 'blue jeans',
      id: 2,
    },
    {
      title: 'iphone',
      id: 3,
    },
  ];

  it('renders correct number of items in cart', () => {
    render(
      <BrowserRouter>
        <Header cart={mockCart} />
      </BrowserRouter>,
    );
    expect(screen.getByText('Cart (3)'));
  });
});

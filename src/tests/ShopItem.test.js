/* eslint-disable jest/valid-expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import ShopItem from '../components/ShopItem';

describe('Shop Item component', () => {
  let fakeProduct = {
    title: 'black shirt',
    price: '9.99',
    id: 1,
    image: 'fake/img',
  };

  it('component contains correct content', () => {
    render(
      <BrowserRouter>
        <ShopItem product={fakeProduct} />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('imgTest')).toBeInTheDocument();
    expect(screen.getByTestId('imgTest')).toHaveAttribute('src', 'fake/img');

    expect(screen.getByText('black shirt'));
    expect(screen.getByText('$9.99'));
    expect(
      screen.getByRole('button', { name: 'Add to Cart' }),
    ).toBeInTheDocument();
  });

  it('adds item to cart on "Add to Cart" button click', async () => {
    const mockCart = [];

    const addToCart = jest.fn();

    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <ShopItem
          product={fakeProduct}
          cart={mockCart}
          setCart={addToCart}
        />
      </BrowserRouter>,
    );

    const addButton = screen.getByRole('button', { name: 'Add to Cart' });

    await user.click(addButton);
    expect(addToCart).toHaveBeenCalled();
  });
});

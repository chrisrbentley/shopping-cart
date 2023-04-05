/* eslint-disable jest/valid-expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ShopItem from '../components/ShopItem';
import { BrowserRouter } from 'react-router-dom';

describe('Shop Item component', () => {
  let fakeProduct = {
    title: 'black shirt',
    price: '10',
    id: 1,
  };

  it('component contains correct content', () => {
    render(
      <BrowserRouter>
        <ShopItem product={fakeProduct} />
      </BrowserRouter>,
    );

    expect(screen.getByText('black shirt'));
    expect(screen.getByText('$10'));
  });
});

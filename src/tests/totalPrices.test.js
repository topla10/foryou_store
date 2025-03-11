import { describe, it, expect, vi } from 'vitest';

describe('totalPrices', () => {
  it('should return 0 when the cart is empty', () => {
    const cart = [];
    const totalPrices = () => cart.reduce((accumulator, item) => accumulator + item.price, 0);
    expect(totalPrices()).toBe(0);
  });

  it('should return the correct total price when there are items in the cart', () => {
    const cart = [
      { id: 1, price: 10 },
      { id: 2, price: 20 },
    ];
    const totalPrices = () => cart.reduce((accumulator, item) => accumulator + item.price, 0);
    expect(totalPrices()).toBe(30);
  });
});

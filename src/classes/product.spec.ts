import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should retunr undefined', () => {
    // System Under Test
    const sut = createSut('Produto 1', 10);
    expect(sut).toHaveProperty('name', 'Produto 1');
    expect(sut).toHaveProperty('price', 10);
  });
});

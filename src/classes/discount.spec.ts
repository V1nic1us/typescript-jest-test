import { Discount, FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    // System Under Test
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    // System Under Test
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150)).toBeCloseTo(75);
  });

  it('should apply 10% discount on price', () => {
    // System Under Test
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});

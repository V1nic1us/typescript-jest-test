import { Persisty } from './persisty';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should retunr undefined', () => {
    // System Under Test
    const sut = new Persisty();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call consolelog once', () => {
    // System Under Test
    const sut = new Persisty();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call consolelog with "Pedido salvo com sucesso"', () => {
    // System Under Test
    const sut = new Persisty();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso');
  });
});

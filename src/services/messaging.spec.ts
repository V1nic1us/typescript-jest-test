import { Message } from './message';

const createSut = () => {
  return new Message();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should retunr undefined', () => {
    // System Under Test
    const sut = createSut();
    expect(sut.sendMessage('Mensagem de Teste')).toBeUndefined();
  });

  it('should call consolelog once', () => {
    // System Under Test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Mensagem de Teste 2');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call consolelog with "Mensagem de Teste 3"', () => {
    // System Under Test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Mensagem de Teste 3');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem de Teste 3');
  });
});

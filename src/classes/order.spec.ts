import { cartItem } from '../interfaces/cartItem';
import { ShoppingCartProtocol } from '../interfaces/shopping-cart-protocol';
import { Order } from './order';
import { MessagingProtocol } from '../interfaces/messaging-protocol';
import { PersistyProtocol } from '../interfaces/persisty-protocol';
import { CustomerOrder } from '../interfaces/customer-protocol';
import exp = require('constants');

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<cartItem[]> {
    return [];
  }

  addItem(item: cartItem): void {}
  removeItem(product: cartItem): void {}
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 2;
  }
  isEmpty(): boolean {
    return false;
  }
  clear(): void {}
}

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {}
}

class PersitencyMock implements PersistyProtocol {
  saveOrder(): void {}
}

class CustomerMock implements CustomerOrder {
  getName(): string {
    return '';
  }
  getIDN(): string {
    return '';
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persitencyMock = new PersitencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(shoppingCartMock, messagingMock, persitencyMock, customerMock);
  return {
    sut,
    shoppingCartMock,
    messagingMock,
    persitencyMock,
  };
};

describe('Order', () => {
  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(true);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.cartClear).toBe(false);
  });

  it('should checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(false);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.cartClear).toBe(true);
  });

  it('should send an email to customer', () => {
    const { sut, messagingMock } = createSut();
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
    sut.checkout();
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persitencyMock } = createSut();
    const persitencyMockSpy = jest.spyOn(persitencyMock, 'saveOrder');
    sut.checkout();
    expect(persitencyMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear cart', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });
});

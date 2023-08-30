/* eslint-disable @typescript-eslint/no-unused-vars */
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Message } from './services/message';
import { Persisty } from './services/persisty';
import { Product } from './classes/product';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './interfaces/messaging-protocol';

const discount = new NoDiscount();
// const customer = new IndividualCustomer('Marcus', 'Vinícius', '000.000.000-00');
const customer2 = new EnterpriseCustomer('Marcus', 'XX.XXX.XXX/0001-XX');
const cart = new ShoppingCart(discount);
const message = new Message();
const save = new Persisty();

class MessagingMock implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log('Mensagem mockada');
  }
}

const messagingMock = new MessagingMock();

const order = new Order(cart, messagingMock, save, customer2);

cart.addItem(new Product('Agua', 250));
cart.addItem(new Product('Agua com gas', 500));
cart.addItem(new Product('Coca-Cola', 1000));

// cart.addItem({ name: 'Agua', id: 1, price: 250 });
// cart.addItem({ name: 'Agua com gas', id: 2, price: 500 });
// cart.addItem({ name: 'Coca-Cola', id: 3, price: 1000 });
cart.removeItem(new Product('Agua', 250));
// console.log(cart.total());
// console.log(cart.totalWithDiscount());
order.checkout();
console.log(cart);

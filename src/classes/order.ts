import { CustomerOrder } from '../interfaces/customer-protocol';
import { ShoppingCartProtocol } from '../interfaces/shopping-cart-protocol';
import { MessagingProtocol } from '../interfaces/messaging-protocol';
import { PersistyProtocol } from '../interfaces/persisty-protocol';

export class Order {
  private _cartClear: boolean = false;

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessagingProtocol,
    private readonly save: PersistyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  public get cartClear(): boolean {
    return this._cartClear;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      this.message.sendMessage('Carrinho esta vazio');
      return;
    }
    this._cartClear = true;
    this.message.sendMessage('Mensagem enviada');
    this.save.saveOrder();
    this.cart.clear();
    console.log(`O cliente é: ${this.customer.getName()}, ${this.customer.getIDN()}`);
  }
}

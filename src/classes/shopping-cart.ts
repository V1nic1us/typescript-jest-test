import { cartItem } from '../interfaces/cartItem';
import { ShoppingCartProtocol } from '../interfaces/shopping-cart-protocol';
import { Discount } from './discount';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: cartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(product: cartItem): void {
    this._items.push(product);
  }

  removeItem(product: cartItem): void {
    const newarry = this._items.filter((item) => item.name !== product.name && item.price !== product.price);
    this.clear();
    newarry.forEach((item) => this.addItem(item));
  }

  public get items(): Readonly<cartItem[]> {
    return this._items;
  }

  total(): number {
    return this._items.reduce((acumulador, product) => acumulador + product.price, 0);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  clear(): void {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

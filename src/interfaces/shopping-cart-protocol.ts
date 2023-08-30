import { cartItem } from './cartItem';

export interface ShoppingCartProtocol {
  items: Readonly<cartItem[]>;
  addItem(product: cartItem): void;
  removeItem(product: cartItem): void;
  total(): number;
  totalWithDiscount(): number;
  clear(): void;
  isEmpty(): boolean;
}

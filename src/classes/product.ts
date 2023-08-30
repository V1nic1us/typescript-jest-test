import { cartItem } from '../interfaces/cartItem';

export class Product implements cartItem {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

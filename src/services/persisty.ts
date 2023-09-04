import { PersistyProtocol } from '../interfaces/persisty-protocol';

export class Persisty implements PersistyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
}

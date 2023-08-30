import { MessagingProtocol } from '../interfaces/messaging-protocol';

export class Message implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log(message);
  }
}

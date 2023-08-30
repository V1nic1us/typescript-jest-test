import { IndividualCustomerProtocol, EnterpriseCustomerProtocol, CustomerOrder } from '../interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  firstname: string;
  lastName: string;
  cpf: string;

  constructor(firstname: string, lastName: string, cpf: string) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  getName(): string {
    return this.firstname + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}

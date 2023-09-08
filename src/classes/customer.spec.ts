import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustumer = (firstname: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstname, lastName, cpf);
};

const createEnterpriseCustumer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firsName , lastName and cpf', () => {
    // System Under Test
    const sut = createIndividualCustumer('Marcus', 'Vinicius', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Marcus');
    expect(sut).toHaveProperty('lastName', 'Vinicius');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn for individual customer', () => {
    // System Under Test
    const sut = createIndividualCustumer('Marcus', 'Vinicius', '111.111.111-11');
    expect(sut.getName()).toBe('Marcus Vinicius');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    // System Under Test
    const sut = createEnterpriseCustumer('Empresa', '111.111.111-11');
    expect(sut).toHaveProperty('name', 'Empresa');
    expect(sut).toHaveProperty('cnpj', '111.111.111-11');
  });

  it('should have methods to get name and idn for enterprise customer', () => {
    // System Under Test
    const sut = createEnterpriseCustumer('Empresa', '111.111.111-11');
    expect(sut.getName()).toBe('Empresa');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('Name of the group', () => {
  it('should test jest assertions', () => {
    const number = 1;
    expect(number).toBe(1);
    expect(number).toEqual(1);
    expect(number).not.toBeNull();

    expect(number).toBeTruthy();
    expect(number).not.toBeFalsy(); // More explicit than toBeTruthy

    expect(number).toBeGreaterThan(0);
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThan(2);
    expect(number).toBeLessThanOrEqual(1);

    expect(number).toBeCloseTo(1.001, 1);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString');
  });
});

describe('Name of the group', () => {
  it('should test jest assertions', () => {
    const person = { name: 'John', age: 20 };
    const anotherPerson = { ...person };
    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    // expect(person).toHaveProperty('age', 21);
    // expect(person).not.toHaveProperty('age');
    // expect(person).not.toHaveProperty('Lastname');
    expect(person).toEqual({ name: 'John', age: 20 });
  });
});

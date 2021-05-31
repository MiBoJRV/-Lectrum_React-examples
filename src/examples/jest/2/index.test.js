class Person {
    constructor(name) {
        this.name = name;
    }
}

const name = 'Jack';

test('«Person» constructor produces an object with name property', () => {
    expect(new Person(name)).toEqual({
        name,
    });
});

test('«Person» constructor produces an object with name property', () => {
    expect(new Person(name)).toStrictEqual(new Person(name));
});

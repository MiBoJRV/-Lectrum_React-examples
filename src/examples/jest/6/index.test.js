const message = 'resolved!';

// TODO:
// jest.useFakeTimers();

const delay = (duration = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(message), duration);
    });
};

test('old: «delay» function should return a promise', () => {
    return expect(delay()).resolves.toBe(message);
});

test('new: «delay» function should return a promise', async () => {
    await expect(delay()).resolves.toBe(message);
});

// test('very old: «delay» function should return a promise', async () => {
//     expect(await delay()).toBe(message);
// });
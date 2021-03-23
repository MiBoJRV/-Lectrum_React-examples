const callFuncsExceptFirst = (...funcs) => funcs.forEach((func, index) => index !== 0 && func());

describe('«callFuncsExceptFirst» function:', () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    callFuncsExceptFirst(mock1, mock2);

    it('should not call first-argument function', () => {
        expect(mock1).not.toHaveBeenCalled();
    });

    it('should call every function passed as argument one time', () => {
        expect(mock2).toHaveBeenCalledTimes(1);
    });
});

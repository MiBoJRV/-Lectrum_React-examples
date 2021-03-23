const data = [ 'a' ];


describe('getArrayFunction', ()=>{
    it('should return an array with valid data', () => {
        expect(['a', 'b']).toEqual(expect.arrayContaining(data));
    });
})

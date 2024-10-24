
const {checkNumber, buildRange} = require('./script')

describe("reverseCase", () => {
    test('returns the number if it is greater than 10', ()=>{
        expect(checkNumber(15)).toBe(15);
    })
    
    test('return all numbers in range including start & end', ()=>{
        const testArray = [1, 2, 3, 4, 5]
        expect(buildRange(1,5)).toEqual(testArray);
    })
    
    test('return all numbers in range when start and & end are the same', ()=>{
        const testArray = [3]
        expect(buildRange(3,3)).toEqual(testArray);
    })
    
    test('return empty array when end is before start', ()=>{
        expect(buildRange(5,3)).toEqual([]);
    })
    
    test('test if kevin & micah vars are equal', ()=>{
        const kevin = 5;
        const micah = 5;
        expect(micah).toBe(kevin);
    })
})

//toBe will compare to reference
//toEqual will check that value between to arrays
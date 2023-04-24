const theSum = require("../sum");

// test (name, function, timeout)
// it (name, function, timeout)
// describe(name, function)

describe("Check the Numbers Sum Total", () => {

    describe("If No Numbers or only one number", () => {
        test ("Return 0 If The Number", () => {
            expect(theSum()).toBe(0);
        })
        
        
        test ("Return The Number", () => {
            expect(theSum(10)).toBe(10);
        })
    })

    describe("if more than one number", () => {
        test ("Return The Number 1 + Number 2", () => {
            expect(theSum(15, 25)).toBe(40);
        })
        
        test ("Return The Number 1 + Number 2 + Number 3", () => {
            expect(theSum(10, 20, 30)).toBe(60);
        })
        
        test ("Return The Number 1 + Number 2 + Number 3 + Number 4", () => {
            expect(theSum(10, 20, 30, 10)).toBe(70);
        })
        
        test ("Return The Sum Result of All Numbers", () => {
            expect(theSum(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
        })
    })
});


console.log([].reduce((a, b) => a + b, 0));
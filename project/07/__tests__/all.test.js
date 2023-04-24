const allDeta = require("../all");

test("check if array contains 6 element 1st method", () => {
    expect(allDeta.length).toBe(6);
});

test("check if array contains 6 element 2and method", () => {
    expect(allDeta).toHaveLength(6);
});

test("check if array contains number 3", () => {
    expect(allDeta).toContain(3);
});

test("check if array not contains number 6", () => {
    expect(allDeta).not.toContain(6);
});

test("check if array not contains number zero", () => {
    for (let i = 0; i < allDeta.length; i++) {
    expect(allDeta[i]).not.toBe(0);
    }
});

test("check if array  contains only numbers 1st methods", () => {
    for (let i = 0; i < allDeta.length; i++) {
    expect(isNaN(allDeta[i])).toBe(false);
    }
});

test("check if array  contains only numbers 2nd methods", () => {
    for (let i = 0; i < allDeta.length; i++) {
    expect(isNaN(allDeta[i])).toBeFalsy();
    }
});

test("check if array  contains only numbers 3rd methods", () => {
    for (let i = 0; i < allDeta.length; i++) {
    expect(isNaN(allDeta[i])).not.toBeTruthy();
    }
});

test("check if array frist element is larger than 1", () => {
    expect(allDeta[0]).toBeGreaterThanOrEqual(1);
});

test("check if array frist element is Less Than 5", () => {
    expect(allDeta[0]).toBeLessThanOrEqual(5);
});

test("check For Undefined", () => {
    let a;
    expect(a).toBeUndefined();
});

test("Check For Substring Inside String By RegExp", () => {
    let myString = "I Love  Elzero Web School";
    expect(myString).toMatch(/Elzero/);
});

test("Check For Property Age", () => {
    let myObject = {
        name: "osama",
        age: "37",
    }
    expect(myObject).toHaveProperty("age");
});

test("Check For Property Age Value Is 37", () => {
    let myObject = {
        name: "osama",
        age: 37,
    }
    expect(myObject).toHaveProperty("age", 37);
});

expect.extend({
    toBeLargerThan(received, target) {
        const pass = received > target;
        if (pass) {
            return {
                message: () => `Expected ${received} To Be Than ${target}`,
                pass: true,
            };
        } else {
            return {
                message: () => `Error: Expected ${received} To Be Than ${target}`,
                pass: false,
            };
        }
    },
});

test("Check If Number Is Larger Than Other Number", () => {
    expect(10).toBeLargerThan(8);
})

expect.extend({
    toBeBetween(received, start, end) {
        const pass = received > start && received < end;
        if (pass) {
            return {
                message: () => `Expected ${received} To Be Between ${start} And ${end}`,
                pass: true,
            }
        } else {
            return {
                message: () => `Expected ${received} To Be Between ${start} And ${end}`,
                pass: false,
            }
        }
    },
});

test("Check If Year Between Years Range", () => {
    expect(1982).toBeBetween(1900, 2020);
})

//Expect Anything() => Anything But Undefined + Null

test("Expect Anything", () => {
    let x = "A";
    expect("Osama").toEqual(expect.anything());
    expect(1).toEqual(expect.anything());
    expect([1, 2, 3, 4]).toEqual(expect.anything());
    expect(x).toEqual(expect.anything());
})


//expect.Any(Constructor)

test("Expect Any Constructor", () => {
    expect("Osama").toEqual(expect.any(String));
})

//expect.arrayContaining(array)

test("Expect Array To Be Found In The Main Array", () => {
    const myArray = [1, 2, 3, 4, 5, 6]
    expect(myArray).toEqual(expect.arrayContaining([5, 3, 4, 6]));
})
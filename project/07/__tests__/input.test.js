const theFilter = require("../input");

describe("Validate The Input Field", () => {
    test("Check If Name Is Empty", () => {
        expect(theFilter()).toBe("Unknown");
    })

    test("Check For Spaces(Start + End)", () => {
        expect(theFilter(" Osama ")).toBe("Osama");
    })

    test("Check If Name Lenght > 10 Characters", () => {
        expect(theFilter("Osama_mohammed_Elsayd")).toBe("Osama_moha");
    })

    test("Check If Name Not Starts With Underscore", () => {
        expect(theFilter("_Osama")).toBe("Osama");
    })
})


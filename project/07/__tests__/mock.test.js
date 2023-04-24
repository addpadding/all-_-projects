const mocker = require("../mock");

test("Mock Function", () => {
    const mocker = jest.fn((name) => `Hello ${name}`);
    expect(mocker("Osama")).toBe("Hello Osama");
    expect(mocker("Ahmed")).toBe("Hello Ahmed");
    expect(mocker("Sayed")).toBe("Hello Sayed");
    expect(mocker).toHaveBeenCalled();
    expect(mocker).toHaveBeenCalledTimes(3);
    expect(mocker).toHaveBeenCalledWith("Ahmed");
    expect(mocker).toHaveBeenLastCalledWith("Sayed");
});
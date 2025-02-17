import { isEven } from "./isEven";

describe("tests for isEven function", () => {
    it("operate with even, odd and invalid number", () => {
        expect(isEven(2)).toBe(`2 - even number`);
        expect(isEven(3)).toBe(`3 - odd number`);
        expect(isEven(0)).toBe(`0 - even number`);
        expect(isEven(2.3)).toBe(`2.3 - not integer number`);
        expect(isEven("s")).toBe("Invalid number");
        expect(isEven("")).toBe("Invalid number");
    }) 
})
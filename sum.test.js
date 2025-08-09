
import sum from "./sum.js";

describe("Sum Function Tests", () => {

    test("add 1 + 2 equal to 3", () => {  

    expect(sum(1, 2)).toBe(3);
});


test("add -5 + -5 equal to -10", () => {  

    expect(sum(-5,-5)).toBe(-10);
});

})


const calculator = require(".././javascript-modules/calculator.js");

test("sum 3 + 4 = 7 ", () => {
  expect(calculator.sum(3, 4)).toBe(7);
});

test("subtraction 10 - 12 = -2", () => {
  expect(calculator.subtraction(10, 12)).toBe(-2);
});

test("moltiplication 3 * 2 = 6", () => {
  expect(calculator.moltiplication(3, 2)).toBe(6);
});

test("division 10 / 5 = 2", () => {
  expect(calculator.division(10, 5)).toBe(2);
});

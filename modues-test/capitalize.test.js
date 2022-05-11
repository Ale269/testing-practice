const capitalize = require(".././javascript-modules/capitalize.js");

test("capitalize AriaNNa to Arianna", () => {
  expect(capitalize("ariaNNA")).toBe("Arianna");
});

test("capitalize Pippo to Pippo", () => {
  expect(capitalize("Pippo")).toBe("Pippo");
});

test("capitalize gIaCoMo to Giacomo", () => {
  expect(capitalize("gIaCoMo")).toBe("Giacomo");
});

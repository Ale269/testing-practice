const reverse = require(".././javascript-modules/reverse.js");

test("reverse Ombrello to Ollerbmo", () => {
  expect(reverse("Ombrello")).toBe("ollerbmO");
});

test("reverse caVolFioRe to eRoiFloVac", () => {
  expect(reverse("caVolFioRe")).toBe("eRoiFloVac");
});

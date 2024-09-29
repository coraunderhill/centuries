const convert = require('./index');

const now = new Date();

test("Today as Date object should result in 21", () => {
  expect(convert(now)).toBe(21);
});

test("-2000 should result in -21", () => {
  expect(convert(-2000)).toBe(-21);
});

test("2024 should result in 21", () => {
  expect(convert(2024)).toBe(21);
});

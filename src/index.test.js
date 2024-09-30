const convert = require('./index');

const now = new Date();

test("Today as Date object should result in 21 as a number", () => {
  expect(convert(now)).toBe(21);
});

test("0 as a number should result in 1 as a number", () => {
  expect(convert(0)).toBe(1);
});

test("-2000 as a number should result in -20 as a number", () => {
  expect(convert(-2000)).toBe(-20);
});

test("-2001 as a number should result in -20 as a number", () => {
  expect(convert(-2001)).toBe(-21);
});

test("2001 as a number should result in 21 as a number", () => {
  expect(convert(2001)).toBe(21);
});

test("2024 as a string should result in 21 as a number", () => {
  expect(convert('2024')).toBe(21);
});

test("1999-12-31 as a string should result in 20 as a number", () => {
  expect(convert('1999-12-31')).toBe(20);
});

test("2000-02-31 as a string should result in 20 as a number", () => {
  expect(convert('2000-02-31')).toBe(20);
});

test("2000-02-32 as a string should throw an error", () => {
  expect(() => { convert('2000-02-32'); }).toThrow(Error);
});

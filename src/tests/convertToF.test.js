import { convertToF, reverseString } from "../index";

test("convertToF", () => {
  expect(convertToF(30)).toBe(86);
  expect(convertToF(0)).toBe(32);
  expect(convertToF(-30)).toBe(-22);
});

test("reverseString", () => {
//   execpt(factorializ(5)
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("Howdy")).toBe("ydwoH");
  expect(reverseString("Greetings from Earth")).toBe("htraE morf sgniteerG");
});

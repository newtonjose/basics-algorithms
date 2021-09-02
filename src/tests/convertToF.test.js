import { convertToF } from "../index";

test("convertToF", function () {
  expect(convertToF(30)).toBe(86);
  expect(convertToF(0)).toBe(32);
  expect(convertToF(-30)).toBe(-22);
});

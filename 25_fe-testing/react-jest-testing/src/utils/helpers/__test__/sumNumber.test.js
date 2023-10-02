import { sumAll } from "../sumNumber";

describe("Testing helper sumNumber", () => {
  test("Should sum correctly", () => {
    const A = 4;
    const B = 6;
    const EXPECTED = 10;

    const sum = sumAll(A, B);

    expect(sum).toBe(EXPECTED);
  });

  test("Should not sum if only 1", () => {
    const A = 4;

    const sum = sumAll(A);

    expect(sum).toBe(A);
  });
});

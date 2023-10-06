import { addNumber } from "../addNumber"

describe("check function addNumber.ts", () => {
  test("check jia 2+3 = 5", () => {
    const hasil = addNumber(2, 3);
    const nilaiEkspektasi = 5
    expect(hasil).toBe(nilaiEkspektasi)
    expect({ umur: 25, nama: "nando" }).toMatchObject({ nama: "nando", umur: 25 });
    expect("1").toBeTruthy() // check apakah dia falsy
  }) // pengecekan
})
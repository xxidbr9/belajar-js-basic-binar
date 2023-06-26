const nilai = 10;

// alur percabangan if - else if (bisa lebih dari 0) - else

if (nilai > 11) {
  // sama itu dianggap lebih
  console.log("A");
}

console.log();

if (nilai >= 10) {
  // karna ada `sama dengan` => lebih besar dan sama dengan
  console.log("B");
} else {
  console.log("C");
}

if (false) {
} else if (false) {
} else if (true) {
} else {
  // else hanya berjalan ketika kondisi di atasnya false semua
}

// SWTICH
/* 
 switch itu kurang lebih hanya mencari kunci yang 
*/
switch (
  "C" // C => sebagai kuncinya
) {
  // langsung enter
  case "A": //
    console.log("A");
    break; // `break` untuk menghentikan switch

  case "B": {
    console.log("B");
  }

  default:
    console.log("C");
}

// TERNARY OPERATOR, lebih buat assign value sebuah variable
const nilaiUAS = 80;
// posisi sebelum ?, itu check kondisi boolean(benar/salah),
// kalau benar pakai yang awal, kalau salah lanjut kanannya
const laporanUAS = nilaiUAS > 70 ? "Lolos" : "Gagal";
console.log(laporanUAS);

const nilaiUAS_Nando = 30;
const expAwal = nilaiUAS_Nando > 70;
const laporanUAS_NAndo = expAwal
  ? "Lolos"
  : nilaiUAS_Nando > 60
  ? "Lolos Biasa"
  : nilaiUAS_Nando > 40
  ? "Lolos miris"
  : "Gagal";

console.log(laporanUAS_NAndo);

false ? console.log("65, Bisa") : console.log("65, Galat");

// SHORT HAND IF ELSE
const nilaiUlangan = 70;
if (nilaiUlangan > 80) console.log("Sukses");
else if (nilaiUlangan > 75) console.log("Memuaskan");
else if (nilaiUlangan > 70) console.log("Berhasil");
else if (nilaiUlangan > 60) console.log("Naik kelas");
else console.log("Gagal Ulangan");

const array_1 = ["A", "B", "C", "A"];

// SET
/* 
SET itu adalah sebuah array yang tanpa duplikasi
*/
const tanpa_duplikasi = new Set([...array_1]);
tanpa_duplikasi.add("D");
tanpa_duplikasi.add("E");
tanpa_duplikasi.add("F");
console.log([...tanpa_duplikasi]);

// Object
const siswa = {
  nama: "nando",
  umur: 27,
  asal: "Solo"
};

console.log(siswa.nama);

// distructering
const nilaiC = array_1[2];
const [A, ...sisa] = array_1; // distructering dari index
console.log(sisa);

// Object
const { umur } = siswa;
const umur2 = siswa.siswa;
console.log(umur);

// MAP
/* 
itu adalah sebuah obect yang tanpa duplikasi key
*/
const guru = new Map();

guru.set("nama", "henry");
guru.set("asal", "Jakarta");
console.log("40", guru.delete("umur"));
console.log(...guru);
//
// [
//   ["nama", "henry"],
//   ["asal", "Jakarta"]
// ];

const kepalaSekolah = {
  nama: "Pardi",
  asal: "Bekasi"
};

kepalaSekolah.umur = 51;

const list_umur = [1, 2, 7, 5, 3, 10, 21, 7, 5];
console.log(list_umur.sort((a, b) => b - a));

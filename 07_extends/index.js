const array_1 = [1, 2, 3, 4, 5];

// per item di array_1 ditambah 1
const array_2 = array_1.map((val, index, array) => val + 1);
console.log(array_2);

// cara manual
// const mapArray = [];

// for (let i = 0; i < array_1.length; i++) {
//   mapArray.push(array_1[i] + 1);
// }

// console.log("mapArray", mapArray);

//
const _map = (array_asli, callback) => {
  const mapArray = [];

  for (let i = 0; i < array_1.length; i++) {
    const value = callback(array_1[i], i, array_asli);
    mapArray.push(value);
  }
  return mapArray;
};

const mapping = (val, index, array) => val + 1;
// dependency injectsion
const mapManual = _map(array_1, mapping);

console.log("mapping", mapping(2));

console.log("mapManual", mapManual);

// merusak bahasa javascript

Array.prototype.tambah1 = function (callback) {
  const mapArray = [];

  for (let i = 0; i < this.length; i++) {
    const value = callback(this[i], i, this);
    mapArray.push(value + 1);
  }
  console.log("jalan bos");
  console.log(this);

  return mapArray;
};

const arrayRusak = array_1.tambah1(val => val);
console.log("arrayRusak", arrayRusak);

function Hello(umur) {
  this.name = "nando";
  this.umur_orang = umur;
}

Hello.prototype.panggil = function () {
  console.log("hai bro ", this.name, "umur kamu ", this.umur_orang);
};

const hello = {
  name: "nando",
  sayHello() {
    const namaOrang = this.name;
    console.log(`Hallo ${namaOrang}, selamat datang di dunia fantasi`);
  }
};

const halloNando = new Hello(27);
console.log("70", halloNando.name);
halloNando.panggil();
// OOP => object oriented programming

class Siswa {
  nama_siswa;
  umur_siswa;

  constructor(nama, umur) {
    this.nama_siswa = nama;
    this.umur_siswa = umur;
  }

  sayHello(){
    console.log("Hallo ", this.nama_siswa, "umur kamu", this.umur_siswa)
  }
}

// kita panggil class siswa dan mengisi data di constructor
const siswaBaru = new Siswa("rendi", 10)
siswaBaru.sayHello()
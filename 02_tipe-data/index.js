const nama = ""; // string
const umur = 20; // number

// boolean depannya is, can => clean code
const isWork = false; //

// Non Primitive
const arr = [1, 21, 3]; // array => baris
const obj = {}; // object

// index array == n - 1, n itu panjang

// object itu terdiri dari key : value, key itu selalu string
const car = {
  wheels: 2,
  color: "pink",
  info: {
    plat: "B12093D"
  },
  20: "hello",
  sayName: function () {
    this.color;
  },
  sayWord: () => {},
  listNilai: [1, 2, 4]
};

// const khusu buat object dan array itu bisa dirubah valuenya
car.wheels = 4;
car.factory = "hyundai";

// delete car.color;

// ada 2 cara akses object
// pertama dengan . => titik
// mau akses total roda
// console.log(car.wheels);
// // pertama dengan key []
// console.log(car["wheels"]);
// console.log(car[umur]); // cara pemanggilan dinamis

// console.log(car["listNilai"][2]);

// Array
const array2 = [1, 2, 3, 4];
const obj2 = {
  0: 1,
  1: 2
};

const post = {
  id: "123",
  user: "nando",
  nama: "Hello dunia",
  tanggal: Date.now(),
  umur: 20
};
const post2 = {
  id: "123",
  user: "nando",
  nama: "Hello dunia",
  tanggal: Date.now(),
  umur: 31
};
const post3 = {
  id: "123",
  user: "rizki",
  nama: "Hello dunia",
  tanggal: Date.now(),
  umur: 25
};

// penamaan array kalau bisa jamak, plural ada s nya atau menandakan itu sebuah list, baris atau array
const posts = [post, post2, post3]; // kosep tiktok
// console.log(posts)

// build function / method untuk array
// filter => untuk mencari
const editedPosts = posts.filter(
  (value, index, array) => value.user === "nando"
);
console.log(editedPosts);

// modifikasi array baru, map ini panjangnya sama dengan array asli
const mapPosts = posts.map(value => {
  return {
    hello: value.nama
  };
});

const rataRataUmur =
  posts.reduce((firstValue, currentValue) => {
    const value = currentValue.umur + firstValue;
    return value;
  }, 0) / posts.length;

console.log(Math.floor(rataRataUmur));

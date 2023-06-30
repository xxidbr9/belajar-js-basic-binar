// function dasar
function sayHello(nama) {
  // paramter, arguments
  console.log("hallo ", nama);
}

// sayHello("nando");

// apa callback
// memasukan sebuah function yang belum dipanggil, untuk di panggil di dalam function terluar
function luar(callback, callback2, nama_siswa) {
  // nama argument bebas
  callback(nama_siswa); // ini yang berjalan
  callback2(nama_siswa);
}

function dalam(nama) {
  console.log("Hallo semua nama saya,", nama);
}

function dalam2(nama) {
  console.log("Saya", nama, "salam kenal!");
}

const nama = "barnando";
const nama2 = "ilham";

luar(dalam2, dalam, nama);

// real case
const database = () => "database:db:binar";

const controller = db => {
  if (!db()) {
    throw Error("db tidak terkoneksi");
  }
  jalankanFungsi_2_async(db);
  // console.log("jalankanFungsi_1:berjalan", db)
  jalankanFungsi_1(db); // ini jalan duluan karna syncronous, => berjalan berutan
  console.log("Db berhasil tersambung");
};

function jalankanFungsi_1(db) {
  // nama argument, semakin jelas semakin bagus
  console.log("jalankanFungsi_1:berjalan", db);
}

function jalankanFungsi_2_async(db) {
  // nama argument, semakin jelas semakin bagus
  setTimeout(() => {
    console.log("jalankanFungsi_2_async:berjalan", db);
  }, 0); // ini menunggu 0.1s, 1 detik = 1000ms
}

// () =>{} // artinya anomimous function / atau function tidak bernama
// controller(() => "")
controller(database);

// func => func => func

// list syntax async
/* 
- setTimout
- setInterval
- Promise
- async & await
*/

// lambda kalkulus, callback
const func_1 = (callback) => {
  return callback;
};

// 
function dalamLabda(nama) {
  console.log("Hallo semua nama lambda,", nama);
}

func_1(dalamLabda)("nando")  // 

const innerFunc = func_1(dalamLabda); // return callback;
innerFunc("dimas");

// memorization / cache system
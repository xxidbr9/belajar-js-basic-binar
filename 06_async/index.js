// async => artinya berjalan tidak berdasarkan urutannya
// setTimeout(() => {
//   console.log("hello");
// }, 102);
// setTimeout(() => {
//   console.log("hello2");
// }, 101);
// setTimeout(() => {
//   console.log("hello3");
// }, 10);

// callback

const tambah = (a, b, callback) => {
  return callback(a + b);
};
const total = tambah(1, 1, hasil =>
  tambah(hasil, 2, hasil2 => tambah(hasil, hasil2, hasil3 => hasil3))
);
// console.log(total);

// tambah nunggu 1 detik
const tambah_tunggu = (a, b, callback) => {
  // setTimeout => proses menunggu data dari server
  setTimeout(() => {
    callback(a + b);
  }, 105);
};

// kurang nunggu 2 detik
const kurang_tunggu = (a, b, callback) => {
  setTimeout(() => {
    callback(a - b);
  }, 2000);
};

// callback hell
tambah_tunggu(1, 1, hasil => {
  tambah_tunggu(hasil, 1, hasil2 => {
    tambah_tunggu(hasil2, 1, hasil3 => {
      tambah_tunggu(hasil3, 1, hasil4 => {
        tambah_tunggu(hasil4, 1, hasil5 => {
          tambah_tunggu(hasil5, 1, hasil6 => {
            tambah_tunggu(hasil6, 1, hasil7 => {
              console.log("tunggu 7 detik", hasil7);
            });
          });
        });
      });
    });
  });
});

// Promise
const tambah_promise = (a, b) => {
  // setTimeout => proses menunggu data dari server
  return new Promise((resolve, reject) => {
    // if (a === 8) {
    //   reject("Udah hasil 8");
    // }
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};
console.timeStamp("promise");
console.time("promise");
tambah_promise(1, 1)
  .then(hasil => tambah_promise(hasil, 1))
  .then(hasil => tambah_promise(hasil, 1))
  .then(hasil => tambah_promise(hasil, 1))
  .then(hasil => tambah_promise(hasil, 1))
  .then(hasil => tambah_promise(hasil, 1))
  .then(hasil => tambah_promise(hasil, 1))
  .then(hasil => tambah_promise(hasil, 1))
  .then(hasil => {
    console.timeEnd("promise");
    console.log(hasil);
  })
  .catch(err => console.log("ini error nya: ", err));

// function async
// function itu sama function biasa, tapi bisa mengolah data menunggu
async function hasilSemuaFunction() {}
const hasilSemuaArrow = async () => {
  console.time("hasilSemuaArrow");
  let result = 0;
  result += await tambah_promise(1, 1);
  result += await tambah_promise(1, 1);
  result += await tambah_promise(1, 1);
  result += await tambah_promise(1, 1);
  result += await tambah_promise(1, 1);
  result += await tambah_promise(1, 1);
  console.timeEnd("hasilSemuaArrow");
  console.log("async function", result);
};

hasilSemuaArrow();

// async pararel
const hasilSemuaArrowPararel = async () => {
  console.time("hasilSemuaArrowPararel");
  let result = 0;

  const listNilai = await Promise.all([
    tambah_promise(1, 1),
    tambah_promise(1, 1),
    tambah_promise(1, 1),
    tambah_promise(1, 1),
    tambah_promise(1, 1),
    tambah_promise(1, 1)
  ]);

  result += listNilai.reduce((n, f) => n + f, 0);

  console.timeEnd("hasilSemuaArrowPararel");
  console.log("async function pararel", result);
};

hasilSemuaArrowPararel()
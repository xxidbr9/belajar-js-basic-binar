// console.log("Hello dunia javascript")
// pakai standart library
const fs = require("fs");

const path = require("path");
const pathSave = path.join(__dirname, "folder-catatan/resep.txt");

fs.writeFile(pathSave, "RESEP MASAKAN 2", () => {
  console.log("hallo");
});

const os = require("os");

const osName = os.platform();

console.log({ osName });

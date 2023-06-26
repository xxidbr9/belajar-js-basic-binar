// function declaration
function sayHello() {
  this.name = "nando";
}

// variable
const sayMyName = () => {
  return "Hello"
};
const sayMyName2 = () => ""; // short hand syntax => atau langsung return

// argument
const helloWorld = (nama, umur) => `Hai saya ${nama}, umur saya ${umur}`;
console.log(helloWorld("nando", 27));

const siswa = new sayHello();
console.log(siswa);

const pertambahan = (a, b) => a + b;
console.log(pertambahan(1, 2));
console.log(pertambahan(2, 3));
console.log(pertambahan(2, pertambahan(1, 2)));

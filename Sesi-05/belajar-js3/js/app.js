// ! Operator Aritmatika
const title = document.getElementById("title");

title.innerHTML = "Penggunaan Operator Aritmatika di JS";

let bilangan1 = parseFloat(prompt("Input number 1:"));
let bilangan2 = parseFloat(prompt("Input number 2:"));
console.log(`${bilangan1} - ${bilangan2}`);

// aritmatika
const penjumlahan = bilangan1 + bilangan2;
const pengurangan = bilangan1 - bilangan2;
const perkalian = bilangan1 * bilangan2;
const pembagian = bilangan1 / bilangan2;
const modulus = bilangan1 % bilangan2;

// result
const jumlah = () => {
  document.getElementById(
    "penjumlahan"
  ).innerHTML = `Hasil Penjumlahan: ${penjumlahan}`;
};

const kurang = () => {
  document.getElementById(
    "pengurangan"
  ).innerHTML = `Hasil Pengurangan: ${pengurangan}`;
};

const kali = () => {
  document.getElementById(
    "perkalian"
  ).innerHTML = `Hasil Perkalian: ${perkalian}`;
};

const bagi = () => {
  document.getElementById(
    "pembagian"
  ).innerHTML = `Hasil Pembagian: ${pembagian}`;
};

const mod = () => {
  document.getElementById("modulus").innerHTML = `Hasil Modulus: ${modulus}`;
};

let score = 100;
score = 50;
//SCORE = 50;
let age = 19;
let name = "Rizky";

console.log(score);
console.log(name);

const PI = 3.14;
console.log(PI);
console.log(age);

let a = 89;
let b = 90;

console.log(a);
console.log(b);

let ageo = 19;
let nama = "sibalun";

console.log(ageo);
console.log(nama);

console.log(score);
console.log(name);
console.log(age);

let da = 2;
da = 3;

console.log(da);
let ammar = 839;
console.log(ammar);
// if else
if (da < 10) {
  console.log("da kurang dari 10");
} else {
  console.log("da lebih dari 10");
}
// switch case
let as = 2;
switch (as) {
  case 1:
    console.log("senin");
    break;
  case 2:
    console.log("selasa");
    break;
  case 3:
    console.log("rabu");
    break;
  case 4:
    console.log("kamis");
    break;
  case 5:
    console.log("jumat");
    break;
  case 6:
    console.log("sabtu");
  case 7:
    console.log("minggu");
  default:
    console.log("tidak ada");
}

// tenary operator
let ago = 15;
let aw = ago <= 20 ? "kurang dari 20" : "lebih dari 20";
console.log(aw);

function test() {
  return "hello, world";
}
// function return
function segitiga(sisi) {
  let luas = sisi * sisi;
  return luas;
}

let hasil = segitiga(5);
console.log(hasil);

function luass(jari) {
  return 3 * jari * jari;
}

let hasil1 = luass(10);
console.log(hasil1);

// scope
var namas = "rizky";
function test() {
  console.log("hello," + namas);
}
test();

var name1 = "John";

// Fungsi yang mengakses variabel global
function greet() {
  console.log("Hello, " + name1);
}

// Mengubah nilai variabel global
name1 = "Jane";

// Memanggil fungsi greet
greet(); // Hello, Jane

let s = "lobi";
function stest() {
  var mo = "hello" + s;

  console.log(mo);
}
stest(); //hellolobi
//loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
let buah = ["apple", "banana", "cherry"];
for (let u of buah) {
  console.log(u);
}
let x = 9;
while (x <= 15) {
  console.log(x);
  x++;
}
for (let v = 20; v <= 30; v++) {
  console.log(v);
}


// fungsi

// document.getElementById("button").scrollIntoView({ behavior: 'smooth' });

if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }
;

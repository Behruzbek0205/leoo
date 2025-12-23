const num = [12, 5, 7, 9, 3];
console.log(num.splice(4));
// slice vazifasi kesib berish , manfiyniham kesib beradi yani -1

const un = [12, 5, 7, 9, 3];
console.log(un.indexOf(12));
// indexOf nechinchi indexdagiligini topadi

const katta = "frontend";
console.log(katta.toUpperCase());
// toUpperCase hamma sozni kattalashtiradi

for (i = 0; i <= 10; i++) {
  console.log(i);
}
//  for chiklidan foydalanib ishladik

const meva = ["olma", "gilos"];
meva.push("nok");
console.log(meva);
// console.log(meva + ',nok');
// push oxirigs qoshib berdi

//  alert, promt, confirm

// alert userni ogohlantirish sifatida ishlatiladi
// alert('nma gap')

// promt bu userdan malumot olsih uchun ishlatiladi
// let promt = prompt("yoshingizni kiriting");
// if (promt >= 18) {
//   console.log("ktish mumkin");
// } else {
//   console.log("hali yosh siz");
// }



const kopay = [1, 2, 3, 4];
console.log(kopay.map((item) => item * 10));
// map blan ishladik va map vazifasi har bir valueni ichiga kirib 10ga kopaytirib chiqiyapti

let uzunlik = "JavsScript";
console.log(uzunlik.length);


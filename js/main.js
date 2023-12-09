// For1
// let a = prompt("a ni kiriting:");
// let b = prompt("b ni kiriting:");

// a = parseInt(a);
// b = parseInt(b);

// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         console.log(i);
//     }

//     console.log("Chiqarilgan sonlar soni:", b - a + 1);
// } else {
//     console.log("Xatolik: a < b bo'lishi kerak.");
// }

// For2
// let a = prompt("a ni kiriting:");
// let b = prompt("b ni kiriting:");

// a = parseInt(a);
// b = parseInt(b);

// if (a < b) {
//     let result = [];

//     for (let i = b - 1; i > a; i--) {
//         result.push(i);
//     }

//     console.log("Chiqarilgan sonlar:", result.join(', '));
//     console.log("Chiqarilgan sonlar soni:", result.length);
// } else {
//     console.log("Xatolik: a < b bo'lishi kerak.");
// }


// For3
// function konfetNarxi(kgSoni) {
//     // Haqiqiy son bo'lgan konfet narxi (masalan, USD)
//     const narxBirKg = 10;

//     if (kgSoni <= 0) {
//         return "Noto'g'ri kirish. Konfet hajmi musbat bo'lishi kerak.";
//     } else {
//         let result = '';
//         for (let i = 1; i <= kgSoni; i++) {
//             const narx = narxBirKg * i;
//             result += `${i} kg konfetning narxi: ${narx} USD\n`;
//         }
//         return result;
//     }
// }

// // Test qilish
// let kgSoni = 1;
// console.log(konfetNarxi(kgSoni));

// kgSoni = 2;
// console.log(konfetNarxi(kgSoni));

// kgSoni = 10;
// console.log(konfetNarxi(kgSoni));

// For4
// function konfetNarxi(kgSoni) {
//     // Haqiqiy son bo'lmagan konfet narxi (masalan, 2.5 USD)
//     const narxBirKg = 2.5;

//     if (kgSoni <= 0) {
//         return "Noto'g'ri kirish. Konfet hajmi musbat bo'lishi kerak.";
//     } else {
//         let result = '';
//         for (let i = 1.2; i <= kgSoni; i += 0.2) {
//             const narx = narxBirKg * i;
//             result += `${i.toFixed(1)} kg konfetning narxi: ${narx.toFixed(2)} USD\n`;
//         }
//         return result;
//     }
// }

// // Test qilish
// let kgSoni = 2;
// console.log(konfetNarxi(kgSoni));

// For5
// function butunSonlarYigindisi(a, b) {
//     if (a >= b) {
//         return "Noto'g'ri kirish. a < b bo'lishi kerak.";
//     } else {
//         let yigindi = 0;

//         // For loop
//         for (let i = a; i <= b; i++) {
//             yigindi += i;
//         }

//         // While loop
//         // let i = a;
//         // while (i <= b) {
//         //     yigindi += i;
//         //     i++;
//         // }

//         return `Butun sonlar yig'indisi: ${yigindi}`;
//     }
// }

// // Test qilish
// let a = 1;
// let b = 5;
// console.log(butunSonlarYigindisi(a, b));

// a = 3;
// b = 8;
// console.log(butunSonlarYigindisi(a, b));

// For6
// function butunSonlarKopaytma(a, b) {
//     if (a >= b) {
//         return "Noto'g'ri kirish. a < b bo'lishi kerak.";
//     } else {
//         let kopaytma = 1;

//         for (let i = a; i <= b; i++) {
//             kopaytma *= i;
//         }

//         return `Butun sonlar ko'paytmasi: ${kopaytma}`;
//     }
// }

// // Test qilish
// let a = 2;
// let b = 5;
// console.log(butunSonlarKopaytma(a, b));

// a = 1;
// b = 3;
// console.log(butunSonlarKopaytma(a, b));


// For7
// function kvadratlarYigindisi(a, b) {
//     if (a >= b) {
//         return "Noto'g'ri kirish. a < b bo'lishi kerak.";
//     } else {
//         let yigindi = 0;

//         for (let i = a; i <= b; i++) {
//             yigindi += i * i;
//         }

//         return `Butun sonlar kvadratlarining yig'indisi: ${yigindi}`;
//     }
// }

// // Test qilish
// let a = 1;
// let b = 4;
// console.log(kvadratlarYigindisi(a, b));

// a = 2;
// b = 5;
// console.log(kvadratlarYigindisi(a, b));


// For8
// function yigindi(n) {
//     if (n <= 0) {
//         return "Noto'g'ri kirish. n > 0 bo'lishi kerak.";
//     } else {
//         let summa = 0;

//         for (let i = 1; i <= n; i++) {
//             summa += 1 / i;
//         }

//         return `Yig'indi: ${summa.toFixed(4)}`;
//     }
// }

// // Test qilish
// let n = 3;
// console.log(yigindi(n));

// n = 5;
// console.log(yigindi(n));


// For9
// function kopaytma(n) {
//     if (n <= 0) {
//         return "Noto'g'ri kirish. n > 0 bo'lishi kerak.";
//     } else {
//         let natija = 1.0;

//         for (let i = 1.1; i <= n; i += 0.1) {
//             natija *= i;
//         }

//         return `Ko'paytma: ${natija.toFixed(4)}`;
//     }
// }

// // Test qilish
// let n = 5;
// console.log(kopaytma(n));

// n = 10;
// console.log(kopaytma(n));

// For10
// function kvadratniHisobla(n) {
//     if (n <= 0) {
//         return "Noto'g'ri kirish. n > 0 bo'lishi kerak.";
//     } else {
//         let natija = 0;7

//         for (let i = 1; i <= 2 * n - 1; i += 2) {
//             natija += i;
//             console.log(`(${i}) => ${natija}`);
//         }

//         return `Natijaviy kvadrat: ${natija}`;
//     }
// }

// // Test qilish
// let n = 5;
// console.log(kvadratniHisobla(n));

// n = 8;
// console.log(kvadratniHisobla(n));

// For11
// function darajaHisobla(n, a) {
//     if (n <= 0) {
//         return "Noto'g'ri kirish. n > 0 bo'lishi kerak.";
//     } else {
//         let natija = 1;

//         for (let i = 1; i <= n; i++) {
//             natija *= a;
//         }

//         return `${a} ning ${n} - darajasi: ${natija}`;
//     }
// }

// // Test qilish
// let n = 3;
// let a = 2;
// console.log(darajaHisobla(n, a));

// n = 4;
// a = 3;
// console.log(darajaHisobla(n, a));

// For - 12
// let n = parseInt(prompt("n ni kiriting (n > 0):"));
// let a = parseInt(prompt("a ni kiriting:"));

// for (let i = 1, daraja = a; i <= n; i++) {
//     daraja *= a
//     console.log(${a} ning ${i}-darajasi: ${daraja});
// }

// For - 13

// let n = parseInt(prompt("n ni kiriting (n > 0):"));
// let a = parseFloat(prompt("a ni kiriting:"));

// let S = 1;

// for (let i = 1, daraja = a; i <= n; i++) {
//     daraja *= a
//     S += daraja;
// }

// console.log(Yigindi (S): ${S});

// For - 14

// let n = parseInt(prompt("n ni kiriting (n > 0):"));

// let S = 0;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//     factorial *= i;
//     S += factorial;
// }

// console.log(Yigindi (S): ${S});

// For - 15

// let N = parseInt(prompt("N ni kiriting (N > 0):"));
// let K = parseInt(prompt("K ni kiriting:"));

// let S = 0;

// for (let i = 1; i <= N; i++) {
//     S += Math.pow(i, K);
// }

// console.log(Yigindi (S): ${S});

// For - 16

// let N = parseInt(prompt("N ni kiriting (N > 0):"));

// let S = 0;

// for (let i = 1; i <= N; i++) {
//     S += Math.pow(i, i);
// }

// console.log(Yigindi (S): ${S});

// For - 17

// let A = parseInt(prompt("A ni kiriting:"));
// let B = parseInt(prompt("B ni kiriting (A < B):"));

// for (let i = A; i <= B; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log(i);
//     }
// }

// For - 18

// let son = parseInt(prompt("Istalgan sonni kiriting:"));

// let boluvchilar = [];
// let yigindi = 0;

// for (let i = 1; i <= son; i++) {
//     if (son % i === 0) {
//         boluvchilar.push(i);
//         yigindi += i;
//     }
// }

// console.log(${son} ning boluvchilari: ${boluvchilar.join(', ')});
// console.log(Boluvchilarning yigindisi: ${yigindi});

// For - 19

// let n = parseInt(prompt("n ni kiriting (n > 1):"));

// let tub = true;

// if (n <= 1) {
//     console.log(${n} tub yoki tub emas.);
// } else {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             tub = false;
//             break;
//         }
//     }

//     if (tub) {
//         console.log(${n} tub son.);
//     } else {
//         console.log(${n} tub emas.);
//     }
// }

// For - 20

// let N = parseInt(prompt("N ni kiriting:"));

// for (let i = 1; i <= N; i++) {
//     let tartibdagiSonlar = "";
//     for (let j = 1; j <= i; j++) {
//         tartibdagiSonlar += j + " ";
//     }
//     console.log(tartibdagiSonlar.trim());
// }

// While 1

// let A = parseInt(prompt("A ni kiriting:"));
// let B = parseInt(prompt("B ni kiriting (B < A):"));

// while (A % B !== 0) {
//     A--;
// }

// let boshQisim = A / B;

// console.log(A ning maksimal darajada B kesma joylashtirilgan bosh qismi: ${boshQisim});

// While 2

// let A = parseInt(prompt("A ni kiriting:"));
// let B = parseInt(prompt("B ni kiriting (B < A):"));

// let joylashtirishMumkinligi = 0;

// while (A >= B) {
//     A -= B;
//     joylashtirishMumkinligi++;
// }

// console.log(A kesmada B kesmadan nechta joylashtirish mumkinligi: ${joylashtirishMumkinligi});

// While 3

// let n = parseInt(prompt("n ni kiriting (n > 0):"));

// if (n > 0) {
//     if (Math.pow(3, 2) === n) {
//         console.log("3 - ning darajasi");
//     } else {
//         console.log("3 - ning darajasi emas");
//     }
// } else {
//     console.log("Noto'g'ri qiymat kiritildi. n > 0 bo'lishi kerak!");
// }

// While 4

// let n = parseInt(prompt("n ni kiriting:"));
// let m = parseInt(prompt("m ni kiriting (m < n):"));

// while (n <= m) {
//     console.log("Noto'g'ri qiymatlar kiritildi. n > m bo'lishi kerak!");
//     n = parseInt(prompt("n ni kiriting:"));
//     m = parseInt(prompt("m ni kiriting (m < n):"));
// }

// let butunQismi = Math.floor(n / m);
// let qoldiq = n % m;

// console.log(${n} ni ${m} ga bolib, butun qismi: ${butunQismi}, qoldiq: ${qoldiq});
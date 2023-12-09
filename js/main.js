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


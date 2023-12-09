// For1
let a = prompt("a ni kiriting:");
let b = prompt("b ni kiriting:");

a = parseInt(a);
b = parseInt(b);

if (a < b) {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }

    console.log("Chiqarilgan sonlar soni:", b - a + 1);
} else {
    console.log("Xatolik: a < b bo'lishi kerak.");
}

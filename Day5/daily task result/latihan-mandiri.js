//No.1
let a = 6; //global

function lokal() {
    let b = 10; //lokal
    console.log(a);
    console.log(b);
}

console.log(a);
console.log(b);

//No.2
//hoisting dengan "var"
console.log(a);
var a1 = 6;

angka();
function angka() {
    console.log("6");
}

//hoisting dengan "let"
console.log(b);
let b = 10;

angka();
function angka() {
    console.log("10");
}

//hoisting dengan "const"
console.log(6);
const c = 6;

angka();
function angka {
    console.log("6");
}

//No.3
function harga1(saldo1 = ``) {
    return function (saldo2 = ``) {
        result = Number(saldo1) + Number(saldo2)
        console.log(`${saldo1} telah menambah ${saldo2} . Total ${result} `)
        return
    }
}

harga1("60000")("40000")
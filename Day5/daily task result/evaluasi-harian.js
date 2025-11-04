//Buat fungsi `pencatatanPengeluaran()` yang bisa menyimpan total pengeluaran.
function harga1(saldo1 = ``) {
    return function (saldo2 = ``) {
        result = Number(saldo1) + Number(saldo2)
        console.log(`Catatan pengeluaran ${saldo1} + ${saldo2} . Total ${result} `)
        return
    }
}

harga1("35000")("15000")

// Gunakan closure untuk menyimpan data `total` agar tetap ingat antar pemanggilan. 
// kata kunci block scope, re-declaration , reassign di luar scope
function blockscope(){
    var block = "hai"
    if(true){
        var block = "yo "
        block = "ini variable var" // ini variable var bisa di gunakan untuk re-declaration, re-assign  
    } 
    return block
}
console.log(blockscope()); // Outputnya : variable var
//  kata kunci block scope pada let
function blockscope1(){
let block1 = "hai"
if(true){
    let block1 = "yo"
    // [ undifined ] karena variable let tidak bisa meng re-declaration dlm pada 1 block scope kecuali dgn reassign yaitu
    block1 = "adadad"
}
block1 = "ini variable let"
return block1
}
console.log(blockscope1()); // Outputnya : variable let

function blockscope2(){
    const block3 = "ini variable const"
    // if(true){
    //     const block3 = "jkl"    
    // variable const tibak bisa di ubah karena valuenya "absolut"
    //     block3 = "hjk" 
    // }
    // block3 = "uiio"
    return block3
}

console.log(blockscope2()); // Outputnya : variable const

//  ini kasus closure
function harga1(saldo1 = ``) {
    return function (saldo2 = ``) {
        result = Number(saldo1) + Number(saldo2)
        console.log(`${saldo1} telah menambah ${saldo2} . Total ${result} `)
        return
    }
}

harga1(7000)(230000) //Output : 7000 telah menambah 230000 . Total 300000

// kasus hoisting
console.log(ab) // undefined
var ab = "hai"

// kasus global scope 
var x1 = "contohA"
let x2 = "contohB"
const x3 = "contohC"

x1 = "ddef"
x2 = "ddef2"
// x3 = "ddef3" //ini gk bisa 

console.log(x1); // Output : ddef
console.log(x2); // Output : ddef2
console.log(x3); //Output : ddef3
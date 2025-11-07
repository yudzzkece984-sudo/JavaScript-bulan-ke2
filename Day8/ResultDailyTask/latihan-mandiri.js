// Nomor 1
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(angka); //Output : (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Nomor 2
let kali5 = angka.map((angka) => {
    return angka * 5;
});
console.log(kali5); //Output : (10) [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// Nomor 3
let genap = angka.filter((angka) => {
    return angka % 2 === 0
});
console.log(genap); //Output : [2, 4, 6, 8, 10]

// Nomor 4
let jumlah = angka.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(jumlah); //Output : 55

// Nomor 5
let temukan = angka.find((angka) => {
    return angka > 8;
});
console.log(temukan) //Output : 9
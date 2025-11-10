//no.1
let angka = [1, 2, 3, 4];
let [a, b, c, d] = angka;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//no.2
let mobil = {
    merek: "Porsche",
    tahun: 1931
}
let {merek, tahun} = mobil;
console.log(merek);
console.log(tahun);

//no.3
let angka1 = [1, 2, 3 ,4];
let mobil1 = [ 'Porsche', 1931];

// Menggabungkan angka1 dan mobil1 ke dalam arrayBaru menggunakan spread operator
let arrayGabungan = [...angka1, ...mobil1]; 

console.log(arrayGabungan); 
// Output: [1, 2, 3, 4, 'Porsche', 1931]

//no.4
function jumlah(...angka) {
  return angka.reduce((total, nilai) => total + nilai, 0);
}

// Contoh penggunaan
console.log(jumlah(2, 7, 6));       // Output: 15
console.log(jumlah(25, 45, 22, 18)); // Output: 110
console.log(jumlah());               // Output: 0

let siswa = {
    nama: "Rino",
    usia: 18,
    kelas: "XI",
    jurusan: "RPL"
};

console.log(siswa);

//no.1
let user = {
    nama: "Rino",
    kelas: "XI"
};

let { nama, kelas} = user;

console.log(nama);
console.log(kelas);

//no.2
let siswa1 = [ 'Rino', 18, 'XI', 'RPL'];
let nilai = [90];

// Menggabungkan siswa1 dan nilai ke dalam arrayBaru menggunakan spread operator
let arrayGabungan = [...siswa1, ...nilai]; 

console.log(arrayGabungan); 
// Output: ['Rino', 18, 'XI', 'RPL', 90]

//no.3
function rataRata(...angka) {
  return angka.reduce((total, nilai) => total + nilai, 0);
}

// Contoh penggunaan
console.log(rataRata(60, 70, 80));
console.log(rataRata(90, 90, 90));
console.log(rataRata(75, 85, 65));
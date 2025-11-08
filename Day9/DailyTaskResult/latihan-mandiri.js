// NOMER 1
let buku = {
    judul : "Solo Leveling",
    pengarang : "Chu-Gong",
    tahunTerbit : 2022
}
// console.log(buku);

//NOMER 2
buku.penerbit = "Dubu(Redice Studio)" // menambah properti baru yaitu penerbit
// console.log(buku);

//NOMER 3
buku.tahunTerbit = 2016 // mengubah nilai properti yaitu tahun terbit menjadi 2016
// console.log(buku);

//NOMER 4
delete buku.pengarang // menghapus properti yaitu pengarang
// console.log(buku);

//NOMER 5
for (let key in buku) {
    // Menggunakan backtick (`) untuk template literal
    console.log(`Pada Key => "${key}" valuenya => "${buku[key]}"`);
}
// console.log(buku)
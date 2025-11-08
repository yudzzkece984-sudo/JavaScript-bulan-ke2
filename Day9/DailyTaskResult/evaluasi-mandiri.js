let bukuFavorit = {
    judul: "One Piece",
    penulis: "Eiichiro Oda",
    tahun: 2014,
};
// Menambahkan properti baru 'kategori' ke objek bukuFavorit
bukuFavorit.kategori = "Shonen, Petualangan, Fantasi, dan Aksi";

// Memperbarui nilai properti 'tahun' di objek bukuFavorit
bukuFavorit.tahun=1997; 

// Menghapus properti 'penulis' dari objek bukuFavorit
delete bukuFavorit.penulis;

// Menampilkan semua properti dan nilainya dari objek bukuFavorit
for (let key in bukuFavorit) {
    // BARIS YANG DIPERBAIKI: Menggunakan backtick (`)
    console.log(`Pada Key => "${key}" Valuenya => "${bukuFavorit[key]}"`); 
}
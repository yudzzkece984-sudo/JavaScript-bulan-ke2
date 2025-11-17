//1.Apa itu callback dalam JavaScript? Berikan contoh paling sederhana.
// Callback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain dan dipanggil setelah operasi tertentu selesai.
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

//2. Buat fungsi `sapaUser(callback)` lalu panggil callback yang mencetak “Halo Santri!”.
function sapaUser(callback) {
    callback();
}
sapaUser(function() {
    console.log("Halo Santri!");
});

//3.Buat contoh callback yang menambah dua angka.
function tambah(a, b, callback) {
    const hasil = a + b;
    callback(hasil);
}
tambah(3, 4, function(hasil) {
    console.log("Hasil penjumlahan: " + hasil);
});

//4.Jelaskan kenapa kita harus pakai `JSON.stringify` di localStorage.
// Karena localStorage hanya dapat menyimpan data dalam format string, sehingga objek atau array perlu diubah menjadi string menggunakan JSON.stringify sebelum disimpan.

//5. Simpan string “Belajar JS” ke localStorage.
localStorage.setItem("materi", "Belajar JS");

//6. Ambil data tersebut dari localStorage.
const materi = localStorage.getItem("materi");

//7.Simpan array `[1,2,3]` ke localStorage.
const angkaArray = [1, 2, 3];
localStorage.setItem("angkaArray", JSON.stringify(angkaArray));

//8.Ambil dan tampilkan kembali array tersebut.
const storedArray = JSON.parse(localStorage.getItem("angkaArray"));

//9.Apa itu JSON
// JSON (JavaScript Object Notation) adalah format data yang ringan dan mudah dibaca untuk pertukaran data antara server dan klien. JSON menggunakan struktur objek dan array yang mirip dengan sintaks JavaScript.

//10.Buat object santri (`nama`, `kelas`, `nilai`) dan simpan ke localStorage.
const santri = {
    nama: "Ahmad",
    kelas: "12A",
    nilai: 95
};
localStorage.setItem("santri", JSON.stringify(santri));

//11.Buat callback yang memvalidasi input tidak kosong.
function validateInput(input, callback) {
    if (input.trim() === "") {
        callback(false);
    } else {
        callback(true);
    }
}

validateInput("  ", function(isValid) {
    console.log("Input valid: " + isValid);
});
validateInput("Santri", function(isValid) {
    console.log("Input valid: " + isValid);
});

//12.Buat fungsi `tunda(callback)` yang menjalankan callback setelah 1 detik.
function tunda(callback) {
    setTimeout(callback, 1000);
}
tunda(function() {
    console.log("Callback dijalankan setelah 1 detik");
});

//13.Buat fungsi yang menerima array dan callback untuk mengalikan setiap item.
function multiplyArray(arr, callback) {
    const result = arr.map(item => item * 2);
    callback(result);
}
multiplyArray([1, 2, 3], function(result) {
    console.log("Hasil perkalian: " + result);
});

//14.Buat fungsi hapus item localStorage.
function hapusItemLocalStorage(key) {
    localStorage.removeItem(key);
}
hapusItemLocalStorage("materi");

//15.Ambil semua key di localStorage (hint: `Object.keys(localStorage)`)
const allKeys = Object.keys(localStorage);
console.log("Semua key di localStorage: " + allKeys);
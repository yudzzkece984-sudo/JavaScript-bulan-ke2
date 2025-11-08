// =======================================================
// EASY MODE LEVEL 1
// =======================================================

const santri = ["Ahmad", "Luqman", "Fauzi", "Rayhan"];
console.log(santri[0]); // Output: Ahmad
console.log(santri.length); // Output: 4

santri.unshift("Zidane"); // ["Zidane", "Ahmad", "Luqman", "Fauzi", "Rayhan"]

// Hapus elemen terakhir (Rayhan). Index 4 adalah Rayhan pada array saat ini.
// NOTE: 'delete' tidak menghapus elemen, hanya membuat 'empty item'.
// Lebih baik menggunakan .pop() untuk menghapus elemen terakhir.
// Jika menggunakan 'delete santri[4]', array menjadi: ["Zidane", "Ahmad", "Luqman", "Fauzi", <1 empty item>]
delete santri[4]; // Menghapus Rayhan (secara logis)

santri.unshift("Ibrahim"); // ["Ibrahim", "Zidane", "Ahmad", "Luqman", "Fauzi", <1 empty item>]

// Menghapus santri pada index ke-2 (sekarang 'Ahmad')
// NOTE: Index 2 setelah unshift 2x adalah 'Ahmad' (sebelumnya Luqman)
delete santri[2]; // ["Ibrahim", "Zidane", <1 empty item>, "Luqman", "Fauzi", <1 empty item>]
console.log(santri); // Output: [ 'Ibrahim', 'Zidane', <1 empty item>, 'Luqman', 'Fauzi', <1 empty item> ]

// ---

const santriBaru = ["Arman", "Zahran", "Ihya", "Raihan Nur", "Rehan S", "Yudis", "Fadhli", "Firman", "Naufal", "Lukman"];
let santriIzin = ["Raihan Nur"];
let santriTerlambat = ['Santri terlambat : Naufal, Lukman'];
console.log(santriTerlambat); // Output: [ 'Santri terlambat : Naufal, Lukman' ]

delete santriIzin[0]; // Menghapus santri yang izin (menjadi <1 empty item>)
// Output: [ <1 empty item> ]
// NOTE: Penggunaan 'delete' pada array tidak disarankan karena meninggalkan 'empty item'.
// Sebaiknya gunakan .splice(0, 1) atau membuat array kosong jika ingin menghapus semua.

let santriHadir = ["Arman", "Zahran", "Ihya", "Raihan Nur", "Rehan S", "Yudis", "Fadhli", "Firman", "Naufal", "Lukman"];
console.log(santriHadir); // Output: [ 'Arman', 'Zahran', 'Ihya', 'Raihan Nur', 'Rehan S', 'Yudis', 'Fadhli', 'Firman', 'Naufal', 'Lukman' ]


// =======================================================
// MEDIUM MODE LEVEL 2
// =======================================================

const nilaiSantri = [85, 92, 76, 90, 100, 67, 88];

// FOR EACH
console.log("\n--- FOR EACH ---");
nilaiSantri.forEach((nilaiSantri) => {
    console.log(nilaiSantri) // Menampilkan setiap elemen di baris baru
});

// MAP
const nilaiSetelahBonus = nilaiSantri.map(nilai => {
    return nilai + 5;
});
console.log("\n--- MAP (Setelah Bonus +5) ---");
console.log(nilaiSetelahBonus); // Output: [ 90, 97, 81, 95, 105, 72, 93 ]

// FILTER
const nilaiLulus = nilaiSantri.filter(nilai => {
    return nilai >= 90;
});
console.log("\n--- FILTER (Nilai >= 90) ---");
console.log(nilaiLulus); // Output: [ 92, 90, 100 ]

// REDUCE (Menghitung Rata-rata)
const totalNilai = nilaiSantri.reduce((akumulator, nilaiSaatIni) => {
    return akumulator + nilaiSaatIni;
}, 0);

const rata2 = totalNilai / nilaiSantri.length;
console.log("\n--- REDUCE (Rata-rata Nilai) ---");
console.log(rata2); // Output: 85.42857...

// FIND
const nilaiSempurna = nilaiSantri.find(nilai => {
    return nilai === 100;
});
console.log("\n--- FIND (Nilai Sempurna 100) ---");
console.log(nilaiSempurna); // Output: 100

// --- STUDY CASE MEDIUM ---
const nilaiSantriPIT = [85, 92, 76, 90, 100, 67, 88];

// 1. Menampilkan semua nilai awal (ERROR FIX: menggunakan template literal `)
console.log(`Nilai awal: [${nilaiSantriPIT.join(', ')}]`); // Output: Nilai awal: [85, 92, 76, 90, 100, 67, 88]

console.log("---");

// 2. Menambah 5 poin ke semua santri menggunakan map()
const nilaiBonus = nilaiSantriPIT.map(nilai => {
    return nilai + 5;
});
console.log(`Nilai + Bonus: [${nilaiBonus.join(', ')}]`); // Output: Nilai + Bonus: [90, 97, 81, 95, 105, 72, 93]

console.log("---");

// 3. Menampilkan hanya santri yang lulus (≥ 85) menggunakan filter()
const santriLulus = nilaiBonus.filter(nilai => {
    return nilai >= 85;
});
console.log(`Santri Lulus: [${santriLulus.join(', ')}]`); // Output: Santri Lulus: [90, 97, 95, 105, 93]

console.log("---");

// 4. Menghitung rata-rata keseluruhan menggunakan reduce()
const totalNilaiSantri = nilaiBonus.reduce((akumulator, nilaiSaatIni) => {
    return akumulator + nilaiSaatIni;
}, 0);

// ERROR FIX: rataRata menggunakan 'totalNilai' yang tidak ada di scope ini.
// Diganti dengan 'totalNilaiSantri'.
const rataRata = totalNilaiSantri / nilaiBonus.length;

// Menampilkan rata-rata dengan satu angka di belakang koma (ERROR FIX: menggunakan template literal `)
console.log(`Rata-rata: ${rataRata.toFixed(1)}`); // Output: Rata-rata: 91.9


// =======================================================
// HARD MODE LEVEL 3 (Object & Manipulasi Properti)
// =======================================================

const santriRIT = {
    nama: "Ahmad Fauzi",
    usia: 18,
    program: "Fullstack Development",
    nilai: 92,
    aktif: true
};
santriRIT.hobby = "Ngoding" // Tambah properti baru
santriRIT.nilai = 95 // Mengubah nilai
delete santriRIT.aktif // Menghapus properti
console.log(santriRIT); // Output: { nama: 'Ahmad Fauzi', usia: 18, program: 'Fullstack Development', nilai: 95, hobby: 'Ngoding' }

// --- STUDI CASE ARRAY OF OBJECT ---

const dataSantri01 = [
    { nama: "Ahmad", nilai: 90, aktif: true },
    { nama: "Luqman", nilai: 75, aktif: true },
    { nama: "Fauzi", nilai: 60, aktif: false },
    { nama: "Zain", nilai: 95, aktif: true }
];

const santriAktif = dataSantri01.filter(santri => santri.aktif === true);
console.log("\nSantri Aktif:");
console.log(santriAktif); // Output: [ { nama: 'Ahmad', nilai: 90, aktif: true }, { nama: 'Luqman', nilai: 75, aktif: true }, { nama: 'Zain', nilai: 95, aktif: true } ]

const santriBonus = santriAktif.map(santri => ({
    // Gunakan spread operator untuk menyalin properti lain
    ...santri,
    // Tambahkan 5 poin ke properti 'nilai'
    nilai: santri.nilai + 5
}));

console.log("\nSantri Aktif dengan Bonus (+5):");
console.log(santriBonus); // Output: [ { nama: 'Ahmad', nilai: 95, aktif: true }, { nama: 'Luqman', nilai: 80, aktif: true }, { nama: 'Zain', nilai: 100, aktif: true } ]

const totalNilaiAktif = santriBonus.reduce((akumulator, santri) => {
    return akumulator + santri.nilai;
}, 0);

const jumlahSantriAktif = santriBonus.length; // Jumlah santri aktif (3 orang)
const rataRataNilaiAktif = totalNilaiAktif / jumlahSantriAktif;

console.log("\nTotal Nilai Aktif (dengan bonus):", totalNilaiAktif); // Output: 275

// ERROR FIX: menggunakan template literal `
console.log(`Rata-rata Nilai Aktif (dengan bonus): ${rataRataNilaiAktif.toFixed(2)}`); // Output: Rata-rata Nilai Aktif (dengan bonus): 91.67

// --- STUDI CASE ANALISIS SANTRI TERBAIK ---

// Menggunakan dataSantri01 yang sama
function analisisDataSantri(data) {

    // 1. Santri dengan nilai tertinggi
    const santriTertinggi = data.reduce((tertinggi, saatIni) => {
        return (saatIni.nilai > tertinggi.nilai) ? saatIni : tertinggi;
    }, data[0]);

    // 2. Santri dengan nilai terendah
    const santriTerendah = data.reduce((terendah, saatIni) => {
        return (saatIni.nilai < terendah.nilai) ? saatIni : terendah;
    }, data[0]);

    // 3. Jumlah santri aktif
    const jumlahAktif = data.filter(santri => santri.aktif).length;

    // 4. Daftar nama santri lulus (nilai ≥ 85)
    const daftarLulus = data
        .filter(santri => santri.nilai >= 85)
        .map(santri => santri.nama);

    return {
        santriNilaiTertinggi: santriTertinggi,
        santriNilaiTerendah: santriTerendah,
        jumlahSantriAktif: jumlahAktif,
        daftarNamaSantriLulus: daftarLulus
    };
}

// Eksekusi fungsi dan tampilkan hasilnya
const hasilAnalisis = analisisDataSantri(dataSantri01);

console.log("\n=== Hasil Analisis Data Santri ===");
// ERROR FIX: menggunakan template literal `
console.log(`1. Santri dengan Nilai Tertinggi: ${hasilAnalisis.santriNilaiTertinggi.nama} (${hasilAnalisis.santriNilaiTertinggi.nilai})`); // Output: 1. Santri dengan Nilai Tertinggi: Zain (95)
console.log(`2. Santri dengan Nilai Terendah: ${hasilAnalisis.santriNilaiTerendah.nama} (${hasilAnalisis.santriNilaiTerendah.nilai})`); // Output: 2. Santri dengan Nilai Terendah: Fauzi (60)
console.log("3. Jumlah Santri Aktif:", hasilAnalisis.jumlahSantriAktif); // Output: 3. Jumlah Santri Aktif: 3
console.log("4. Daftar Nama Santri Lulus (>= 85):", hasilAnalisis.daftarNamaSantriLulus.join(", ")); // Output: 4. Daftar Nama Santri Lulus (>= 85): Ahmad, Zain

// --- STUDI CASE INTEGRASI ARRAY & OBJECT ---

const dataSantriBeasiswa = [
    { nama: "Ahmad Fadhil", program: "Tahfiz", nilai: 92, aktif: true },
    { nama: "Sarah Khairunnisa", program: "Hadits", nilai: 88, aktif: true },
    { nama: "Muhammad Zaki", program: "Fikih", nilai: 75, aktif: true },
    { nama: "Siti Aisyah", program: "Tahfiz", nilai: 95, aktif: true },
    { nama: "Ali Hasan", program: "Akidah", nilai: 60, aktif: false },
    { nama: "Fatimah Azzahra", program: "Hadits", nilai: 98, aktif: true },
    { nama: "Lukman Hakim", program: "Fikih", nilai: 81, aktif: true },
    { nama: "Maryam Jamilah", program: "Tahfiz", nilai: 100, aktif: true },
    { nama: "Rizky Firmansyah", program: "Akidah", nilai: 70, aktif: false },
    { nama: "Nadia Syarifah", program: "Hadits", nilai: 85, aktif: true },
    { nama: "Irfan Maulana", program: "Fikih", nilai: 91, aktif: true },
    { nama: "Hana Nuraini", program: "Tahfiz", nilai: 79, aktif: true },
    { nama: "Bagas Pratama", program: "Akidah", nilai: 65, aktif: false },
    { nama: "Dian Permata", program: "Hadits", nilai: 83, aktif: true },
    { nama: "Joko Susilo", program: "Fikih", nilai: 72, aktif: true },
    { nama: "Zainab Aqila", program: "Tahfiz", nilai: 94, aktif: true },
    { nama: "Khalid Ikhwan", program: "Akidah", nilai: 87, aktif: true },
    { nama: "Lina Marlina", program: "Hadits", nilai: 78, aktif: true },
    { nama: "Hafiz Ridwan", program: "Fikih", nilai: 69, aktif: false },
    { nama: "Adelia Putri", program: "Tahfiz", nilai: 96, aktif: true }
];

console.log("\n--- Data Santri Beasiswa Awal ---");
console.log(dataSantriBeasiswa);

const santriTerurut = [...dataSantriBeasiswa].sort((a, b) => b.nilai - a.nilai); // Urutan nilai tertinggi ke terendah

const topLimaSantri = santriTerurut.slice(0, 5); // 5 Santri terbaik

const pesanTopLima = topLimaSantri.map((santri, index) => { // Map untuk menampilkan pesan
    const peringkat = index + 1;
    let keterangan = "";

    // Logika sederhana untuk keterangan
    if (santri.nilai === 100) {
        keterangan = "Selamat, nilai sempurna!";
    } else if (santri.nilai >= 95) {
        keterangan = "Sangat Memuaskan!";
    } else if (santri.nilai >= 90) {
        keterangan = "Hasilnya Luar Biasa!";
    } else {
        keterangan = "Pertahankan Prestasimu!";
    }
    // ERROR FIX: menggunakan template literal `
    return `Peringkat ${peringkat}: ${santri.nama} (${santri.program}) — Nilai ${santri.nilai}. ${keterangan}`;
});

console.log("\n=== 🏆 5 Santri Terbaik Tahun Ini 🏆 ===");
pesanTopLima.forEach(pesan => console.log(pesan));

/*
Output Top 5:
1. Maryam Jamilah (Tahfiz) — Nilai 100. Selamat, nilai sempurna!
2. Fatimah Azzahra (Hadits) — Nilai 98. Sangat Memuaskan!
3. Adelia Putri (Tahfiz) — Nilai 96. Sangat Memuaskan!
4. Siti Aisyah (Tahfiz) — Nilai 95. Sangat Memuaskan!
5. Zainab Aqila (Tahfiz) — Nilai 94. Sangat Memuaskan!
*/

// --- Mini Project Akhir: “Dashboard Santri Pintar” ---

const dataSantri = [
    { nama: "Ahmad", nilai: 90, program: "Tahfiz", aktif: true, kehadiran: 9 },
    { nama: "Luqman", nilai: 75, program: "Fikih", aktif: true, kehadiran: 6 },
    { nama: "Fauzi", nilai: 60, program: "Hadits", aktif: false, kehadiran: 4 },
    { nama: "Zain", nilai: 95, program: "Tahfiz", aktif: true, kehadiran: 10 },
    { nama: "Sarah", nilai: 88, program: "Fikih", aktif: true, kehadiran: 8 },
    { nama: "Risa", nilai: 72, program: "Hadits", aktif: true, kehadiran: 7 },
    { nama: "Khalid", nilai: 98, program: "Tahfiz", aktif: true, kehadiran: 10 },
    { nama: "Nisa", nilai: 81, program: "Fikih", aktif: false, kehadiran: 5 },
    { nama: "Bagas", nilai: 68, program: "Hadits", aktif: true, kehadiran: 7 },
    { nama: "Dian", nilai: 93, program: "Tahfiz", aktif: true, kehadiran: 9 }
];

// --- 1. Daftar Santri Lulus (Filter dan Map) ---
const daftarLulus = dataSantri
    .filter(santri => santri.nilai >= 80)
    .map(santri => santri.nama);

// --- 2. Rata-rata Nilai Seluruh Santri (Reduce) ---
const totalNilaiPIT = dataSantri.reduce((akumulator, santri) => {
    return akumulator + santri.nilai;
}, 0);

// ERROR FIX: Menggunakan 'totalNilaiPIT' yang benar
const rataRataNilai = totalNilaiPIT / dataSantri.length;

// --- 3. Santri dengan Kehadiran Tertinggi (Reduce) ---
const santriTerajin = dataSantri.reduce((tertinggi, saatIni) => {
    return (saatIni.kehadiran > tertinggi.kehadiran) ? saatIni : tertinggi;
}, dataSantri[0]);

// --- 4. Jumlah Santri Aktif (Filter dan Length) ---
const jumlahSantriAktif1 = dataSantri.filter(santri => santri.aktif).length;

// --- 5. Output Leaderboard 3 Besar (Sort dan Slice) ---
const leaderboard = [...dataSantri]
    .sort((a, b) => b.nilai - a.nilai)
    .slice(0, 3);

console.log("\n=== Hasil Analisis Akademik Santri ===");
// ERROR FIX: Menggunakan template literal ` dan 'jumlahSantriAktif1' yang benar
console.log(`1. Daftar Santri Lulus (Nilai >= 80): ${daftarLulus.join(", ")}`); // Output: Ahmad, Zain, Sarah, Khalid, Nisa, Dian
console.log(`2. Rata-rata Nilai Seluruh Santri: ${rataRataNilai.toFixed(2)}`); // Output: 82.00
console.log(`3. Santri dengan Kehadiran Tertinggi: ${santriTerajin.nama} (${santriTerajin.kehadiran}/10)`); // Output: Zain (10/10)
console.log(`4. Jumlah Santri Aktif: ${jumlahSantriAktif1} dari ${dataSantri.length} santri`); // Output: 8 dari 10 santri

console.log("\n=== 🥇 TOP 3 LEADERBOARD NILAI 🥇 ===");
leaderboard.forEach((santri, index) => {
    // ERROR FIX: Menggunakan template literal `
    console.log(`${index + 1}. ${santri.nama} (${santri.program}) - Nilai: ${santri.nilai}`);
});

/*
Output Leaderboard:
1. Khalid (Tahfiz) - Nilai: 98
2. Zain (Tahfiz) - Nilai: 95
3. Dian (Tahfiz) - Nilai: 93
*/
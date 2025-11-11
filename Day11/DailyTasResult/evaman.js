//Buat data array `transaksi` yang berisi objek dengan `namaBarang`, `jumlah`, dan `hargaSatuan`. Tampilkan:
let transaksi = [
    { namaBarang: "Laptop ASUS", jumlah: 1, hargaSatuan: 8500000 },
    { namaBarang: "Keyboard Mekanik", jumlah: 2, hargaSatuan: 600000 },
    { namaBarang: "Mouse Gaming", jumlah: 3, hargaSatuan: 200000 },
    { namaBarang: "Monitor 27 Inci", jumlah: 1, hargaSatuan: 4800000 },
    { namaBarang: "Webcam Full HD", jumlah: 5, hargaSatuan: 150000 },
];

//Daftar barang yang total belanjanya (jumlah × harga) lebih dari 500 ribu
let belanjaLebihDari500Ribu = transaksi.filter(item => (item.jumlah * item.hargaSatuan) > 500000)
    .map(item => ({ 
        namaBarang: item.namaBarang, 
        totalBelanja: item.jumlah * item.hargaSatuan 
    }));

console.log(belanjaLebihDari500Ribu);

//Total semua belanja
let totalSemuaBelanja = transaksi.reduce((total, item) => total + (item.jumlah * item.hargaSatuan), 0);

console.log(totalSemuaBelanja);

//Array baru yang berisi hanya nama barang dan total belanja
[
  { namaBarang: "Laptop ASUS", totalBelanja: 8500000 },
  { namaBarang: "Keyboard Mekanik", totalBelanja: 1200000 },
  { namaBarang: "Mouse Gaming", totalBelanja: 600000 },
  { namaBarang: "Monitor 27 Inci", totalBelanja: 4800000 },
  { namaBarang: "Webcam Full HD", totalBelanja: 750000 }
]

const arrayNamaDanTotal = transaksi.map(item => ({
    namaBarang: item.namaBarang,
    totalBelanja: item.jumlah * item.hargaSatuan
}));
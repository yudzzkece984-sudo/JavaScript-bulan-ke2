//NO.1
let dataSiswa = [
    { nama: "Zahran", nilai: 90, jurusan: "IPA"},
    { nama: "Reyhan", nilai: 80, jurusan: "MTK"},
    { nama: "Fadli", nilai: 85, jurusan: "IPA"},
    { nama: "Akbar", nilai: 95, jurusan: "IPA"},
    { nama: "Firman", nilai: 85, jurusan: "IPS"}
];
let siswaIPA = dataSiswa.filter(siswa => siswa.jurusan === "IPA");

console.log(siswaIPA);


//NO.2
let siswaNilaiTinggi = dataSiswa.filter(siswa => siswa.nilai > 80);

console.log(siswaNilaiTinggi);

//NO.3
let totalNilai = dataSiswa.reduce((acc, siswa) => acc + siswa.nilai, 0);

let jumlahSiswa = dataSiswa.length;

let rataRataNilai = totalNilai / jumlahSiswa;

console.log(`Total Nilai Seluruh Siswa: ${totalNilai}`);
console.log(`Jumlah Siswa: ${jumlahSiswa}`);
console.log(`Rata-rata Nilai: ${rataRataNilai.toFixed(2)}`);
let nilai = [60, 75, 80, 55, 90, 45];

// Nomor 1
let nilaiLulus = nilai.filter((nilai) => {
    return nilai >= 70;
});
console.log(nilaiLulus) //Output : (3) [75, 80, 90]

// Nomor 2
let seleksi = nilai.map((nilai) => {
    if (nilai >= 70) {
        return `${nilai} - Lulus`;
    } else {
        return `${nilai} - Gagal`;
    }
});
console.log(seleksi); //Output : (6) ['60 - Gagal', '75 - Lulus', '80 - Lulus', '55 - Gagal', '90 - Lulus', '45 - Gagal']

// Nomor 3 
let total = nilai.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(total); //Output : 405

// Nomor 4
console.log("Total akhir :", total); //Output : Total akhir : 405
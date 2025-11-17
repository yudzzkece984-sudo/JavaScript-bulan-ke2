//no.1
function prosesData(data, callback) {
    console.log("Data yang diproses: " + data);
    callback();
}

function setelahProses() {
    console.log("Proses selesai!");
}

prosesData("Project Kimia", setelahProses);

//Gunakan `setTimeout` untuk mensimulasikan delay dan tampilkan teks "Proses selesai" setelah 3 detik.
console.log("Memulai proses...");
setTimeout(function() {
    console.log("Proses selesai");
}, 3000);

//no.3
function cetakAngkaDenganCallback(callback) {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
    callback();
}
cetakAngkaDenganCallback(function() {
    console.log("Selesai mencetak");
}); 
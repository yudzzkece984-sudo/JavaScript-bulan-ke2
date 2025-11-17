function registrasiUser(nama, email, callback) {
    console.log("Mendaftarkan user: " + nama + " dengan email: " + email);  
    // Simulasi penyimpanan user
    setTimeout(function() {
        console.log("User " + nama + " berhasil didaftarkan.");
        callback(nama, email);
    }, 2000);
}

function kirimNotifikasi(nama, email) {
    console.log("Mengirim notifikasi ke " + nama + " di email: " + email);
}
registrasiUser("Andi", "ytta@gmail.com", kirimNotifikasi);
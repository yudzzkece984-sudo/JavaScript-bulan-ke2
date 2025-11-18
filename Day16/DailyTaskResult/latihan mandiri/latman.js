//1.Buat Promise untuk mensimulasikan login user, dan resolve jika username benar.

function loginUser(username) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (username === "Yudis") {
        resolve("Login berhasil!");
      }
        else {
        reject("Login gagal: Username salah.");
      }
    }, 1000);
  });
}

//2.Buat dua proses chaining: Ambil data user, lalu tampilkan pesan sambutan.

loginUser("Yudis")
  .then(function(message) {
    console.log(message);
    return { nama: "Yudis", peran: "Administrator" };
  })
    .then(function(user) {
    console.log(`Selamat datang, ${user.nama}! Peran Anda adalah ${user.peran}.`);
  })
  .catch(function(error) {
    console.log(error);
  });

//3.Buat Promise yang gagal (reject) dan tangani dengan `catch()`.

function gagalPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject("Promise gagal dijalankan.");
    }, 1000);
  });
}

gagalPromise()
  .then(function(message) {
    console.log(message);
  })
  .catch(function(error) {
    console.log("Terjadi kesalahan: " + error);
  });

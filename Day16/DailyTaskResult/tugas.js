// 1. Loading Profil User (Fake Delay)

function loadUserProfile(username) {
  console.log("⏳ Status: PENDING... mengambil data user...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username) {
        reject("Username tidak boleh kosong!");
      } else {
        resolve({
          username,
          name: "Santri Programmer",
          level: "Beginner"
        });
      }
    }, 2000);
  });
}

loadUserProfile("ghifari")
  .then((user) => {
    console.log("✅ Status: SUCCESS");
    console.log("Data user:", user);
  })
  .catch((err) => {
    console.log("❌ Status: REJECT");
    console.error("Error:", err);
  });


// **Challenge**

// * Tambahkan **console.log** sebelum `loadUserProfile` dipanggil dan sesudah chaining `.then().catch()` untuk mengamati **perilaku async (pending)**.
// * Ubah kode supaya data user yang berhasil di-load **disimpan ke `localStorage`** dengan key `"lastUser"` (gunakan `JSON.stringify`).
// ---

console.log("Memulai proses load user profile...");

loadUserProfile("ghifari")
    .then((user) => {
        console.log("✅ Status: SUCCESS");
        console.log("Data user:", user);
        localStorage.setItem("lastUser", JSON.stringify(user));
    })
    .catch((err) => {
        console.log("❌ Status: REJECT");
        console.error("Error:", err);
    })
    .finally(() => {
        console.log("Proses load user profile selesai.");
    });

//2. Promise Cek Koneksi Internet (Simulasi)

function checkConnection() {
  console.log("🔍 Mengecek koneksi... (PENDING)");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isOnline = Math.random() > 0.3; // 70% online
      if (isOnline) {
        resolve("Koneksi stabil. ✅");
      } else {
        reject("Tidak ada koneksi internet. ❌");
      }
    }, 1000);
  });
}

checkConnection()
  .then((message) => {
    console.log("SUCCESS:", message);
  })
  .catch((error) => {
    console.log("REJECT:", error);
  });

// **Challenge**

// * Jika **berhasil**, simpan status `"online"` ke `localStorage` dengan key `"connection_status"`.
// * Jika **gagal**, simpan status `"offline"` ke `localStorage`.
// * Buat function `getLastConnectionStatus()` untuk membaca kembali nilai dari `localStorage`.

function getLastConnectionStatus() {
  return localStorage.getItem("connection_status");
}
checkConnection()
  .then((message) => {
    console.log("SUCCESS:", message);
    localStorage.setItem("connection_status", "online");
  })
  .catch((error) => {
    console.log("REJECT:", error);
    localStorage.setItem("connection_status", "offline");
  })
  .finally(() => {
    console.log("Last connection status:", getLastConnectionStatus());
    });
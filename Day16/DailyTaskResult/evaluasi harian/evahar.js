// 1. Ambil data produk (1 detik)
function ambilProduk() {
  console.log("Langkah 1: Mengambil data produk...");

  const hargaProduk = 100000;
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Produk berhasil diambil. Harga produk: ${hargaProduk}`);
      resolve(hargaProduk);
    }, 1000);
  });
}

// 2. Hitung total harga (1 detik)
function hitungTotal(harga) {
  console.log("Langkah 2: Menghitung total harga...");
  const ongkir = 10000;
  return new Promise((resolve) => {
    setTimeout(() => {
      const totalBelanja = harga + ongkir;
      console.log(`Harga produk + Ongkir (${ongkir}) berhasil dihitung.`);
      resolve(totalBelanja);
    }, 1000);
  });
}

ambilProduk()
  .then((hargaProduk) => {
    return hitungTotal(hargaProduk); 
  })
  .then((total) => {
    // 3. Tampilkan hasilnya
    console.log("Langkah 3: Menampilkan hasil.");
    console.log(`**Total Belanja Anda:** Rp${total.toLocaleString('id-ID')}`);
  })
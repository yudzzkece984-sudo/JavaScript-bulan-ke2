
# 📘 **Latihan JSON**

**Format: Studycase → Challenge**

---

# 🟢 **LEVEL 1 — PRACTICE (Dasar Praktik JSON & Konversi)**

---

### **1. Studycase:**

Convert object siswa ke JSON string.

```js
const siswa = { nama: "Ali", umur: 17 };
const json = JSON.stringify(siswa);
```

👉 **Challenge:**
Buat object **barang** (nama, harga) lalu ubah ke JSON string.

---

### **2. Studycase:**

Mengubah JSON string menjadi object.

```js
const json = '{"nama":"Budi","umur":18}';
const obj = JSON.parse(json);
```

👉 **Challenge:**
Parse JSON string yang berisi data **buku** (judul, tahun).

---

### **3. Studycase:**

Convert array angka ke JSON.

```js
JSON.stringify([1,2,3]);
```

👉 **Challenge:**
Convert array **3 nama temanmu** ke JSON string.

---

### **4. Studycase:**

Ambil property dari hasil parse.

```js
const obj = JSON.parse('{"x":10,"y":20}');
console.log(obj.y);
```

👉 **Challenge:**
Parse JSON dengan value: nama dan kota. Tampilkan kotanya.

---

### **5. Studycase:**

JSON nested.

```js
const data = JSON.parse('{"alamat":{"kota":"Bandung"}}');
console.log(data.alamat.kota);
```

👉 **Challenge:**
Buat JSON berisi **sekolah → kelas → jumlah_siswa**, lalu tampilkan jumlah siswa.

---

### **6. Studycase:**

Stringify dengan indentasi.

```js
JSON.stringify(siswa, null, 2);
```

👉 **Challenge:**
Buat object guru dan stringify dengan indentasi 4.

---

### **7. Studycase:**

Mengubah nilai setelah di-parse.

```js
let user = JSON.parse('{"nama":"Amin","umur":18}');
user.umur = 20;
```

👉 **Challenge:**
Parse JSON berisi "stok":10 ubah menjadi 15.

---

### **8. Studycase:**

Array object → JSON.

```js
const arr = [
  {nama:"Ali"}, {nama:"Budi"}
];
JSON.stringify(arr);
```

👉 **Challenge:**
Buat array object hewan (nama, jenis), lalu stringify.

---

### **9. Studycase:**

Parse array JSON.

```js
const data = JSON.parse('["apel","mangga"]');
console.log(data[1]);
```

👉 **Challenge:**
Parse JSON array 3 warna, tampilkan warna pertama.

---

### **10. Studycase:**

Perbaikan JSON error (visual/mental latihan).
Kesalahan:

```
{ "nama": "Ali", }
```

👉 **Challenge:**
Perbaiki JSON berikut:

```
{"judul": "Buku", "tahun": }
```

---

---

# 🟡 **LEVEL 2 — EXPLORATION (Kasus Dunia Nyata, Masih Sederhana)**

---

### **11. Studycase:**

JSON daftar pelajaran.

```js
const mapel = '["Math","Science","English"]';
const arr = JSON.parse(mapel);
```

👉 **Challenge:**
Buat JSON daftar **hobi**, parse dan tampilkan hobi terakhir.

---

### **12. Studycase:**

JSON daftar siswa.

```js
const siswa = '[{"nama":"Ali","nilai":80},{"nama":"Budi","nilai":60}]';
```

👉 **Challenge:**
Buat JSON untuk 3 siswa dengan nilai. Parse dan tampilkan nilai siswa kedua.

---

### **13. Studycase:**

JSON daftar buah dan harga.

```js
const buah = '[{"nama":"apel","harga":5000},{"nama":"jeruk","harga":4000}]';
```

👉 **Challenge:**
Buat JSON 3 makanan (nama, kalori), parse dan tampilkan kalori makanan pertama.

---

### **14. Studycase:**

Cek nilai.

```js
const d = JSON.parse('{"nilai":72}');
if(d.nilai >= 70) console.log("Lulus");
```

👉 **Challenge:**
Buat JSON siswa (nama, nilai). Parse lalu tampilkan “Lulus” jika nilai ≥ 75.

---

### **15. Studycase:**

Total angka sederhana.

```js
const arr = JSON.parse("[2,4,6]");
let total = arr[0] + arr[1] + arr[2];
```

👉 **Challenge:**
Buat JSON 3 angka lalu hitung totalnya.

---

### **16. Studycase:**

Ambil properti dari object nested.

```js
const d = JSON.parse('{"profil":{"nama":"Ali"}}');
console.log(d.profil.nama);
```

👉 **Challenge:**
Buat JSON profil guru (nama, jabatan → dalam object), lalu tampilkan jabatan.

---

### **17. Studycase:**

Array angka → cari angka terbesar (manual).

```js
const d = JSON.parse("[3,9,2]");
let max = d[0];
if(d[1]>max) max = d[1];
if(d[2]>max) max = d[2];
```

👉 **Challenge:**
Buat JSON 3 angka lalu cari angka terkecil.

---

### **18. Studycase:**

Daftar kegiatan dalam JSON.

```js
const d = JSON.parse('{"pagi":"Belajar"}');
```

👉 **Challenge:**
Buat JSON berisi jadwal (pagi, siang, malam). Parse dan tampilkan kegiatan malam.

---

### **19. Studycase:**

Daftar barang.

```js
const barang = '[{"nama":"Buku","stok":10}]';
```

👉 **Challenge:**
Buat JSON 3 barang, parse, tampilkan stok barang kedua.

---

### **20. Studycase:**

Daftar angka ganjil/genap.

```js
const d = JSON.parse("[1,2,3]");
```

👉 **Challenge:**
Buat JSON daftar angka lalu tampilkan hanya angka yang lebih dari 5.

---

---

# 🔥 **LEVEL 3 — EXPERIMENTAL (Latihan Menggabungkan Logika + JSON)**

---

### **21. Studycase:**

Cari siswa nilai tertinggi.

```js
const d = JSON.parse('[{"n":80},{"n":90},{"n":70}]');
```

👉 **Challenge:**
Buat JSON nilai 3 siswa dan cari nilai tertinggi.

---

### **22. Studycase:**

Data barang: cari barang termurah.

```js
const d = JSON.parse('[{"h":5000},{"h":2000},{"h":3000}]');
```

👉 **Challenge:**
Buat JSON 3 buah (harga). Temukan buah paling mahal.

---

### **23. Studycase:**

Daftar umur, cari usia rata-rata.

```js
const d = JSON.parse("[10,20,30]");
let avg = (d[0]+d[1]+d[2])/3;
```

👉 **Challenge:**
Buat JSON 3 umur dan hitung rata-rata manual (jumlah/3).

---

### **24. Studycase:**

Filter manual (tanpa filter JS).

```js
const d = JSON.parse('[{"k":"kucing"},{"k":"anjing"}]');
```

👉 **Challenge:**
Buat JSON daftar hewan (jenis). Temukan yang jenisnya “burung”.

---

### **25. Studycase:**

Cek kondisi cuaca.

```js
const c = JSON.parse('{"suhu":32}');
if(c.suhu > 30) console.log("Panas");
```

👉 **Challenge:**
Buat JSON cuaca (suhu). Tampilkan “Dingin” jika suhu < 25.

---

### **26. Studycase:**

Daftar buku → tampilkan judul terpanjang.

```js
const buku = JSON.parse('[{"judul":"A"},{"judul":"Belajar JS"}]');
```

👉 **Challenge:**
Buat JSON 3 judul buku lalu tentukan judul terpendek.

---

### **27. Studycase:**

Daftar nomor: cari yang paling kecil.
👉 **Challenge:**
Buat JSON nomor acak (3 angka). Temukan yang paling besar.

---

### **28. Studycase:**

Daftar kelas → hitung total siswa.

```js
const kelas = JSON.parse('[{"s":10},{"s":12},{"s":8}]');
```

👉 **Challenge:**
Buat JSON jumlah peserta 3 kegiatan lalu hitung total.

---

### **29. Studycase:**

Array string → tampilkan panjang string.

```js
const kata = JSON.parse('["apel","jeruk"]');
console.log(kata[0].length);
```

👉 **Challenge:**
Buat JSON 3 kata, tampilkan kata dengan huruf terbanyak.

---

### **30. Studycase:**

Daftar poin game.

```js
const poin = JSON.parse("[100,200,150]");
```

👉 **Challenge:**
Buat JSON poin, tampilkan poin tertinggi & terendah.

---

---

# 🚀 **LEVEL 4 — ADVANCED BEGINNER (Mini Logic yang Lebih Menantang)**

---

### **31. Studycase:**

Daftar barang → tampilkan barang habis (stok 0).
👉 **Challenge:**
Buat JSON 3 barang dan tampilkan semua barang stoknya < 5.

---

### **32. Studycase:**

Daftar siswa hadir/absen.

```js
const d = JSON.parse('[{"n":"Ali","h":true}]');
```

👉 **Challenge:**
Buat JSON 3 siswa dan tampilkan yang h=false.

---

### **33. Studycase:**

Data film → cari film dengan rating tertinggi.
👉 **Challenge:**
Buat JSON film (3 data). Cari yang ratingnya paling rendah.

---

### **34. Studycase:**

Daftar nilai → hitung berapa yang lulus.
👉 **Challenge:**
Buat JSON nilai siswa lalu hitung jumlah yang ≥ 75.

---

### **35. Studycase:**

Data tinggi badan → cari yang paling tinggi.
👉 **Challenge:**
Buat JSON tinggi badan 3 temanmu dan tampilkan semua yang > 165.

---

### **36. Studycase:**

Daftar buah → tampilkan buah kedua.
👉 **Challenge:**
Buat JSON 4 buah dan tampilkan buah terakhir.

---

### **37. Studycase:**

Data barang → total harga.
👉 **Challenge:**
Buat JSON 3 item (harga). Hitung total harga manual.

---

### **38. Studycase:**

JSON kata → cari huruf awal dari setiap kata.
👉 **Challenge:**
Buat JSON kata-kata, tampilkan huruf terakhir setiap kata.

---

### **39. Studycase:**

Daftar produk (nama, kategori).
👉 **Challenge:**
Buat JSON 4 produk, tampilkan yang kategorinya “makanan”.

---

### **40. Studycase:**

JSON tugas → tampilkan tugas yang belum selesai.
👉 **Challenge:**
Buat JSON to-do list (3 tugas). Tampilkan yang selesai=true.

---

---

# 🧨 **LEVEL 5 — MINI PROJECT JSON (Masih Ramah Pemula)**

---

### **41. Studycase:**

Database mini siswa → cari 2 nilai tertinggi.
👉 **Challenge:**
Buat JSON nilai 5 siswa dan cari nilai tertinggi dan kedua.

---

### **42. Studycase:**

Daftar barang → cari 3 barang termurah.
👉 **Challenge:**
Buat JSON 5 barang, urutkan secara manual (tanpa sort JS).

---

### **43. Studycase:**

Profil app → tampilkan format teks.

```js
const d = JSON.parse('{"app":"Test","ver":"1.0"}');
```

👉 **Challenge:**
Buat JSON app (nama_app, versi). Tampilkan format:
`Aplikasi {nama_app} versi {versi}`

---

### **44. Studycase:**

Daftar siswa → hitung total panjang nama.
👉 **Challenge:**
Buat JSON 3 nama, hitung berapa total huruf semua nama.

---

### **45. Studycase:**

Daftar kota → tampilkan kota terpendek namanya.
👉 **Challenge:**
Buat JSON kota-kota, tampilkan kota dengan nama terpanjang.

---

### **46. Studycase:**

Daftar angka → cari angka negatif.
👉 **Challenge:**
Buat JSON 5 angka campuran. Tampilkan angka ≥ 0.

---

### **47. Studycase:**

Daftar barang & stok → hitung rata-rata stok.
👉 **Challenge:**
Buat JSON stok 4 barang, hitung stok tertinggi & rata-rata.

---

### **48. Studycase:**

Daftar tanggal (string biasa).
👉 **Challenge:**
Buat JSON 3 tanggal string. Tampilkan tanggal pertama & terakhir.

---

### **49. Studycase:**

JSON config page (theme, fontsize).
👉 **Challenge:**
Buat JSON setting (tema, bahasa). Tampilkan kalimat deskriptif.

---

### **50. Studycase:**

Mini katalog → tampilkan item dengan nama terpanjang.
👉 **Challenge:**
Buat JSON 5 produk dan tampilkan produk yang namanya paling pendek.

---
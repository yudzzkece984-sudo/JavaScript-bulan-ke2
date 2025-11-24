
// ### Studi Kasus 1

// **Deskripsi:** Validasi input teks agar tidak kosong.

// **To-Dos:**
// 1. Ambil elemen input teks.
// 2. Tambahkan event listener untuk validasi saat form disubmit.
// 3. Tampilkan pesan kesalahan jika input kosong.

// **Jawaban:**
// ```javascript

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    const input = document.getElementById('textInput').value;

    if (input.trim() === "") {
        alert('Input tidak boleh kosong!');
        event.preventDefault();
    }
});
// ```

// ### Studi Kasus 2

// **Deskripsi:** Validasi email menggunakan regex.

// **To-Dos:**
// 1. Ambil elemen input email.
// 2. Tambahkan validasi untuk format email yang benar.
// 3. Tampilkan pesan kesalahan jika email tidak valid.

// **Jawaban:**
// ```javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    const email = document.getElementById('emailInput').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
        alert('Masukkan email yang valid!');
        event.preventDefault();
    }
});
// ```

// Studi Kasus 3
// Deskripsi: Validasi nomor telepon agar hanya berisi angka.

// To-Dos:

// Ambil elemen input nomor telepon.
// Tambahkan validasi untuk memastikan hanya angka.
// Tampilkan pesan kesalahan jika format tidak valid.
// Jawaban:

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const phone = document.getElementById('phoneInput').value;
    
    if (!/^[0-9]+$/.test(phone)) {
        alert('Nomor telepon hanya boleh terdiri dari angka!');
        event.preventDefault();
    }
});

// ### Studi Kasus 4

// **Deskripsi:** Validasi panjang password minimum 8 karakter.

// **To-Dos:**
// 1. Ambil elemen input password.
// 2. Tambahkan validasi untuk memeriksa panjang password.
// 3. Tampilkan pesan kesalahan jika password kurang dari 8 karakter.

// **Jawaban:**
// ```javascript
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const password = document.getElementById('passwordInput').value;

    if (password.length < 8) {
        alert('Password harus terdiri dari minimal 8 karakter!');
        event.preventDefault();
    }
});

// ```

// ### Studi Kasus 5

// **Deskripsi:** Validasi konfirmasi password.

// **To-Dos:**
// 1. Ambil elemen input konfirmasi password.
// 2. Bandingkan dengan password asli.
// 3. Tampilkan pesan kesalahan jika tidak cocok.

// **Jawaban:**
// ```javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    const password = document.getElementById('passwordInput').value;
    const confirmPassword = document.getElementById('confirmPasswordInput').value;

    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok!');
        event.preventDefault();
    }
});

// ```

// ### Studi Kasus 6

// **Deskripsi:** Validasi checkbox harus dicentang.

// **To-Dos:**
// 1. Ambil elemen checkbox.
// 2. Tambahkan validasi untuk memastikan checkbox dicentang.
// 3. Tampilkan pesan kesalahan jika tidak dicentang.

// **Jawaban:**
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const checkbox = document.getElementById('termsCheckbox').checked;
    
    if (!checkbox) {
        alert('Anda harus menyetujui syarat dan ketentuan!');
        event.preventDefault();
    }
});
// ```

// ### Studi Kasus 7

// **Deskripsi:** Validasi URL yang benar.

// **To-Dos:**
// 1. Ambil elemen input URL.
// 2. Tambahkan validasi untuk format URL yang benar.
// 3. Tampilkan pesan kesalahan jika URL tidak valid.

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const url = document.getElementById('urlInput').value;

    const pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

    if (!pattern.test(url)) {
        alert('Masukkan URL yang valid!');
        event.preventDefault();
    }
});

// ```
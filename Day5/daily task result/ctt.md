
scope(variabel)
    Variabel adalah "wadah" untuk menyimpan data di program.

    Variabel yang dideklarasikan dengan var memiliki cakupan fungsi atau global,
    tergantung di mana ia dideklarasikan.

    Jika var dideklarasikan di dalam fungsi, maka hanya dapat diakses dalam fungsi
    tersebut. Sedangkan jika di luar fungsi, bersifat global.

    Var dapat dideklarasikan ulang dalam lingkup yang sama tanpa error.

    Nilai variabel yang telah dideklarasikan dengan var dapat diubah kapan saja selama
    eksekusi program.

    Dalam JavaScript, pendeklarasian variabel var bersifat opsional. Artinya variabel boleh
    atau tidak dideklarasikan sebelumnya, selama langsung diberi nilai.

Kekurangan VAR
    Var hanya mengenal scope fungsi dan scope global. Sehingga jika var dideklarasikan
    di dalam blok seperti if, for, atau while, variabel tetap bisa diakses di luar blok tersebut.
    Hal ini rentan memunculkan bug yang sulit terdeteksi dalam penulisan kode modern,
    berbeda dengan let dan const yang menggunakan scope blok.

    Var bisa dideklarasikan berulang kali dalam scope yang sama tanpa error, sehingga
    data sebelumnya akan ter-overwrite tanpa peringatan. Ini sering menyebabkan
    kesalahan logika pada program yang besar dan sulit dipelihara.

    Dengan scope yang tidak ketat dan mudahnya mere-declare variabel, kode JavaScript
    menjadi kurang readable, cenderung riskan, dan susah dipelihara dalam proyek-proyek
    berskala besar dan modern.

LET
    let adalah salah satu cara modern untuk mendeklarasikan variabel di JavaScript,
    diperkenalkan sejak ES6 (ECMAScript 2015).

    Variabel yang dideklarasi dengan let memiliki block scope, artinya hanya “hidup” di
    dalam blok kode (seperti {}, if, for) tempat deklarasinya dibuat.

    let berbeda dengan var (function scope) dan juga tidak dapat dideklarasi ulang dalam
    scope yang sama, sehingga lebih aman dari bug akibat redeklarasi tidak sengaja.

    Mutability: Nilai yang disimpan pada variabel let bisa diubah selama masih dalam
    scope-nya (mutable).

    Global Property: Jika dideklarasi di global scope, let tidak menambah properti pada
    objek global (seperti window), berbeda dengan var.

CONST

    Tidak Bisa Diubah: Nilai yang di-assign ke const tidak dapat di-reassign (diubah ke
    nilai lain) setelah deklarasi awal.

    Tidak Bisa Redeclare: const tidak boleh dideklarasi ulang dalam satu scope yang
    sama, jika dipaksakan akan error.

    Block Scope: Sama seperti let, const hanya dapat diakses dalam blok tempat ia
    dideklarasikan.

    Mandatory Initialization: Harus langsung diberikan nilai saat deklarasi, tidak bisa const
    x; tanpa value.

    Mutable for Objects/Arrays: Untuk objek/array, referensi konstannya tidak bisa di-
    reassign, tapi isi-isinya masih bisa diubah (misal property object atau array datanya)

A.Scope (Lingkup Variabel)

Scope menentukan di mana variabel dapat diakses.

Global Scope: variabel bisa diakses di seluruh program
Local/Function Scope: variabel hanya bisa diakses di dalam fungsi
Block Scope: variabel hanya tersedia di dalam blok `{}` jika menggunakan `let` atau `const`

contoh:
let x = 10; = global
function tesScope() {
    let y = 20; = local
    console.log(x); = bisa
    console.log(y); = bisa
}

console.log(x) = bisa
console.log(y) = error

B.Hoisting

Hoisting adalah proses pengangkatan deklarasi ke atas sebelum kode dijalankan.

contoh:
console.log(a); = undefined
var a = 5;

fungsi juga bisa di-hoist:
sayHi(); = Output: Hai!

function sayHi() {
  console.log("Hai!)
}

Namun, `let` dan `const` tidak di-hoist seperti `var`:

C.Closure

Closure adalah fungsi yang "mengingat" variabel dari lingkup luar meskipun fungsi luar sudah selesai dieksekusi.

contoh:
function sayHello (say = '') {

    alert(say)

    return function (namaDepan='') {
        alert(say + " " + namaDepan)
    }
}

sayHello("Selamat datang") ("Yudis")

========>

Scope menentukan di mana variabel bisa digunakan

Hoisting memindahkan deklarasi ke atas (hanya berlaku untuk `var` dan function)

Closure memungkinkan fungsi mengingat variabel dari lingkup luar

//task 1.1: select element dengan ID
// ❌ KODE INI BELUM SEMPURNA - COBA DIPERBAIKI!
//1.apa yang salah dengan query selector pertama, apa itu?
 //query selector tersebut tidak memiliki document. di bagian awal querySelector (contoh: document.querySelector)
// const welcomeSection = querySelector
// ('welcome-section');
// console.log(welcomeSection);

// //2.apa simbol yang hilang di kode kedua?
// //simbol  yang hilang di kode kedua adalah "#" pada "action-button" harusnya dia "#action-button" karena simbol ini yang paling umum untuk id
// const myButton = document.querySelector('action-button');
// console.log(myButton);

//3.perbaiki kode
const welcomeSection = document.querySelector('#welcome-section');
console.log(welcomeSection);

const myButton = document.querySelector('#action-button');
console.log(myButton);


//Task 1.2 Select element dengan Class
// ❌ KODE INI INCOMPLETE - FINISH IT!

const firstParagraph = document.querySelector('.description');

const firstCard = document.querySelector('.card'); // ← FILL THIS!
  
console.log(firstCard);
// console.log(firstCard); ← UNCOMMENT & EDIT

//1.Apa yang harus diisi di firstCard = ?
//2.Uncomment dan edit line console.log terakhir?;
//3.Apa perbedaan . dan # di selector?
//simbol:"." untuk:"class" boleh banyak:"Ya, banyak elemen boleh punya class yang sama"
//simbol:"#" untuk:"id" boleh banyak:"Tidak, hanya 1 elemen per halaman"

//Task 1.3 Select SEMUA Element dengan querySelectorAll

// ❌ COBA DULU! INCOMPLETE CODE:

const allParagraphs = document.querySelectorAll('.description'); // ← SELECT SEMUA .description

console.log(allParagraphs); 
console.log(allParagraphs.length); // Berapa jumlahnya?

console.log(allParagraphs[0]);//paragraf 1
console.log(allParagraphs[1]);//paragraf 2
console.log(allParagraphs[2]);//paragraf 3

const allCards = document.querySelectorAll('.card');
console.log(allCards.length); //← UNCOMMENT & RUN

//1.Isi code yang kosong
//2.Coba console.log index yang berbeda (0, 1, 2)
//3.Apa yang terjadi jika akses index 3? (tidak ada)
//hasilnya akan undefined
//karena querySelectorAll() menghasilkan NodeList, mirip seperti array.

//1.4 Loop semua elements
// ❌ INCOMPLETE - SELESAIKAN!

const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    console.log(card.textContent);
});
    // ← BUAT LOOP FOREACH DI SINI
// Gunakan console.log(card.textContent)

const allParagraphs = document.querySelectorAll // ← SELECT SEMUA PARAGRAPHS

allParagraphs.forEach(par => {
    console.log(par.textContent);
});
// ← BUAT LOOP FOREACH DI SINI JUGA
Challenge:

//1.Coba buat forEach loop (jangan copy-paste!)
//2.Jalankan dan lihat console output
//3.Apa itu card dalam forEach(card => ...)? Jelaskan!
//card adalah parameter dari fungsi arrow yang mewakili setiap elemen dalam NodeList hasil querySelectorAll('.card').

//1.5:  Kombinasi - Select dan Loop
// ❌ INCOMPLETE - SELESAIKAN!

const welcomeSection = document.querySelector('#welcome-section'); // ← SELECT WELCOME SECTION

const paragraphs = welcomeSection.querySelectorAll('p'); // ← SELECT SEMUA <p> DI DALAM WELCOME SECTION

paragraphs.forEach((para, index) => {
    console.log(`Paragraf ke-${index + 1}: ${para.textContent}`);
});// ← BUAT LOOP UNTUK PRINT SETIAP TEXTCONTENT

// Bonus: Coba gunakan querySelector pada element, bukan hanya document!
// Contoh: welcomeSection.querySelectorAll('p')
// Tantangan Ekstra:

//1.Buat loop yang print "Paragraf ke-1: ...", "Paragraf ke-2: ..."
paragraphs.forEach((para, index) => {
    console.log(`Paragraf ke-${index + 1}: ${para.textContent}`);
});
//2.Gunakan index dari forEach untuk nomor urut
paragraphs.forEach((para, index) => {
    console.log(`Paragraf ke-${index + 1}: ${para.textContent}`);
});
//3.Contoh: forEach((para, index) => { ... })
paragraphs.forEach((para, index) => {
    console.log(`Paragraf ke-${index + 1}: ${para.textContent}`);
});

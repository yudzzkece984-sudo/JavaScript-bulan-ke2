//no.1
//no.2
function gradeIfElse(grade){
    confirm("Cek Nilai Siswa");
    let a = prompt("Berapa Nilai Anda");
    let grade = (a);

    if (grade < 0) {
        console.log("Nilai Tidak Valid");
    } else if (grade >= 90) {
        console.log("Grade Anda: A");
    } else if (Nilai >= 80){
        console.log("Grade Anda: B");
    } else if (Nilai >= 70){
        console.log("Grade Anda: C");
    } else if (Nilai >= 60){
        console.log("Grade Anda: D");
    } else if (Nilai <= 60){
        console.log("Grade Anda: E");
    } else {
        console.log("Nilai Tidak Valid");
    }
}

//no.3
function kategoriSwitch(kode) {
    const kode = document.getElementById("kode").value;
    let result;

    switch (kode()) {
        case "M":
            result = "Mentor";
            break;
        case "A":
            result = "Admin";
            break;
        case "S":
            result = "Santri";
            break;
        case "T":
            result = "Tamu";
            break;
        default:
            result = "Kode Tidak Valid";
            break;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `Kategori: ${result}\n`;
    togglePopup("2");
}

//no.4
function bilanganGenap(arr){

let genap = [1, 2, 3, 4, 6];
for(let i = 0; i < genap.length; i++) {
    console.log('angka ke-' + (i+2) + ': ' + genap[i]);
    
}
}

//no.5


//no.6

//no.8
function kelolaAntrian(list, aksi) {
    let list = ["fadli"]
    console.log(list);

    //push & unshift
    list.push("firman");
    list.unshift("yudis");
    console.log(list)

    //pop & shift
    list.pop();
    list.shift();
    console.log(list);
}

//no.9
//map
function kurvaNilai(santri, tambah) {
    let santri = ["akbar", "luqman"]

    let nilai = [70, 75, 80, 85, 90, 95, 100]

    let santri = nilai.map(nilai => {
        return nilai + 5;
    });
    console.log("\n--- MAP (Setelah Bonus +5) ---")
    console.log(santri);
}

//no.10
//filter + find
function seleksiDanCari(arr, batas, namaDiCari) {
    let santri = ["firman", "fadli"];

    let nilaiSantri = [75, 80, 85, 90, 95, 100]
    let nilaiLulus = nilaiSantri.filter(nilai => {
        return nilai >= 80;
    });
    console.log("\n--- FILTER (Nilai >= 80) ---")
    console.log(nilaiLulus);

    let namaSantri = santri.find(nama => {
        return nama === "firman";
    });
    console.log("\n--- FIND (Nama Firman) ---")
    console.log(namaSantri);
}

//no.11
//reduce + rest
function analitikNilai(...nilaiSantri) {
    let totalNilai = nilaiSantri.reduce((akumulator, nilaiSaatIni) => {
        return akumulator + nilaiSaatIni;
    }, 0);

    let rataRata = totalNilai / nilaiSantri.length; 
    console.log("\n--- REDUCE (Rata-rata Nilai) ---")
    console.log(rataRata);


}

//no.12

//no.13
function ambilDataSantri(s) {
  const { nama, profil: { usia, kontak: { telp } } } = s;

  return `${nama} (${usia}) - ${telp}`;
}

console.log(
  ambilDataSantri({
    nama: "Yudis",
    profil: { usia: 19, kontak: { telp: "0858" } }
  })
);

 //no.14
function gabungProfilDanJumlah(admin, asrama, ...nilaiTambahan) {

  const profilGabung = { ...admin, ...asrama };

  const totalTambahan = nilaiTambahan.reduce((total, nilai) => total + nilai, 0);

  return { profilGabung, totalTambahan };
}

console.log(
  gabungProfilDanJumlah({ nama: "Yudis" }, { kamar: "A1" }, 10, 20, 30)
);

 //no.15
 function laporanProgram(pondok) {
    let namaPondok = ["Rumah IT Indonesia"];
    let program = ["html", "css", "js"];
    let mentor = ["Mas EL"];
 }
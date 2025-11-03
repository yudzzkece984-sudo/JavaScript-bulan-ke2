// Fungsi untuk membuka/menutup popup modal
function togglePopup(no) {
    const modal = document.getElementById(`popupModal${no}`);
    if (modal) {
        modal.classList.toggle("hidden");
    }
}

// Fungsi untuk membersihkan area output
function clearOutput() {
    document.getElementById("outputBox").innerText = "";
}

// Fungsi untuk menambahkan garis pemisah di output
function addNewPharaghraph() {
    const random = `\n======================\n`;
    const output = document.getElementById("outputBox");
    output.innerText += `${random}`;
}

// --- FUNGSI UTAMA ---

// FORM F1: Kalkulator Sederhana
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operator = document.getElementById("operator").value;

    if (!firstNumber || !secondNumber || !operator) {
        alert("Masukan Angka dan Operator dengan benar!");
        return;
    }
    
    f1(firstNumber, secondNumber, operator);
});

function f1(angkaPertama, angkaKedua, operator) {
    const a = Number(angkaPertama);
    const b = Number(angkaKedua);
    let result;

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("outputBox").innerText += "F1 GAGAL: Input harus berupa angka.\n";
        togglePopup("1");
        return;
    }

    switch (operator) {
        case "*":
            result = a * b;
            break;
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            document.getElementById("outputBox").innerText += "F1 GAGAL: Operator tidak valid (+, -, *, /).\n";
            togglePopup("1");
            return;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `F1: Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}\n`;
    togglePopup("1");
    return result;
}

// FORM F2: Cek Ganjil Genap
document.getElementById("F2").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const number = Number(document.getElementById("numberF2").value);
    
    f2(number); 
});

// Fungsi f2 (Ganjil Genap) - hanya menerima satu angka dari form
function f2(number) {
    let result;
    
    if (isNaN(number)) {
        document.getElementById("outputBox").innerText += "F2 GAGAL: Input harus berupa angka.\n";
        togglePopup("2");
        return;
    }

    if (number % 2 === 0) {
        result = `Angka ${number} adalah Genap`;
    } else {
        result = `Angka ${number} adalah Ganjil`;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `F2: ${result}\n`;
    togglePopup("2");
    return result;
}

// FORM F3: Input Nama & Role Game
document.getElementById("F3").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const nama = document.getElementById("namaF3").value;
    const role = document.getElementById("roleF3").value;

    if (!nama || !role) {
        alert("Masukkan Nama dan Role Game!");
        return;
    }

    // Panggil fungsi f3 dengan nilai dari form
    f3(nama, role);
});

function f3(nama, role) {
    const output = document.getElementById("outputBox");
    output.innerText += `F3: Nama: ${nama}, Role Game: ${role}\n`;
    togglePopup("3"); // Tutup modal setelah selesai
    return { nama, role };
}


// FORM F4: Role Game Switch
document.getElementById("F4").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Ambil nilai dari input form F4 (menggunakan ID: NickF4 dan RoleF4)
    const nick = document.getElementById("NickF4").value;
    const role = document.getElementById("RoleF4").value;
    
    // Panggil fungsi f4 dengan nilai dari form
    f4(nick, role); 
});

function f4(nick, role) {
    let result;
    const roleNum = Number(role);

    if (isNaN(roleNum) || roleNum < 1 || roleNum > 5) {
        document.getElementById("outputBox").innerText += "F4 GAGAL: Masukkan angka role antara 1 sampai 5.\n";
        togglePopup("4");
        return;
    }

    switch (roleNum) {
        case 4:
            result = "Mid Lane → Kamu harus menggunakan hero Mage";
            break;
        case 1:
            result = "Exp Lane → Kamu harus menggunakan hero Fighter";
            break;
        case 2:
            result = "Roam → Kamu harus menggunakan hero Tank atau Support";
            break;
        case 3:
            result = "Gold Lane → Kamu harus menggunakan hero Mm";
            break;
        case 5:
            result = "Hyper → Kamu harus menggunakan hero Assassin atau Fighter";
            break;
        default:
            result = "Role tidak sesuai! Pastikan penulisan sesuai pilihan yang tersedia (1-5).";
            break;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `F4: Halo Player ${nick}, jika kamu memilih Role ${role}: ${result}\n`;
    togglePopup("4"); // Tutup modal setelah selesai
    return result;
}

// Function F5 (Kosong - Disediakan untuk pengembangan)
function f5() {
    const output = document.getElementById("outputBox");
    output.innerText += "F5: Fungsi ini siap untuk diisi dengan kode baru!\n";
}

// Function F6 (Kosong - Disediakan untuk pengembangan)
function f6() {
    const output = document.getElementById("outputBox");
    output.innerText += "F6: Fungsi ini siap untuk diisi dengan kode baru!\n";
}

// Function F7 (Kosong - Disediakan untuk pengembangan)
function f7() {
    const output = document.getElementById("outputBox");
    output.innerText += "F7: Fungsi ini siap untuk diisi dengan kode baru!\n";
}

// Function F8: Arrow Function sederhana (Trigger)
function pengembalian (a1,b1){
    return a1 * b1
}
function f8_trigger() {
    let f8_result = pengembalian(23,45);
    let tambah = f8_result + 45;
    const output = document.getElementById("outputBox");
    output.innerText += `F8: Pertambahan singkat : ${f8_result} + 45 hasil = ${tambah}\n`;
}

// Function F9: Arrow Function sederhana (Trigger)
const pengurangan1 = (n1 , n2) => n1 - n2 ;
function f9_trigger() {
    const result = pengurangan1(76, 98);
    const output = document.getElementById("outputBox");
    output.innerText += `F9: Hasil pengurangan 76 - 98 = ${result}\n`;
}

// Function F10: Function Expression (Trigger)
const exspresi = function perkenalan(Nama,asal){
    return (`Halo Saya ${Nama} , Asal ${asal} , Nice To Meet You `)
}
function f10_trigger() {
    const result = exspresi("Yusril Yudistira", "Jambi");
    const output = document.getElementById("outputBox");
    output.innerText += `F10: ${result}\n`;
}
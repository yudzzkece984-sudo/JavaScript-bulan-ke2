//getTodayForApi() 👉 Mengembalikan tanggal hari ini format yyyy-mm-dd (untuk API).
function getTodayForApi() {
    const today = new 'Date'();
    const year = today.getFullYear();
    const month = 'String'(today.getMonth() + 1).padStart(2, '0');
    const day =   'String'(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

//getTodayForDisplay() 👉 Mengembalikan tanggal hari ini format human readable: 
function getTodayForDisplay() {
    const today = new 'Date'();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return today.toLocaleDateString('id-ID', options);
}

//Fungsi bantu lain (opsional tapi direkomendasikan):
export function padZero(n) {
    return n.toString().padStart(2, '0');
}      // 1 -> "01"

// mengembalikan nama sholat berikutnya, misal "Dzuhur"
export function getNextPrayer(jadwalHarian, nowDateObj) {
    const prayerTimes = {
        'Imsak': jadwalHarian.imsak,
        'Subuh': jadwalHarian.subuh,
        'Terbit': jadwalHarian.terbit,
        'Dzuhur': jadwalHarian.dzuhur,
        'Ashar': jadwalHarian.ashar,
        'Maghrib': jadwalHarian.maghrib,
        'Isya': jadwalHarian.isya
    };
}
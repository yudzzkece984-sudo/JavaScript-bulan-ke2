import { searchCity, getDailySchedule } from './modules/prayerSchedule.js';

const inputKota = document.getElementById('input-kota');
const btnPilih = document.getElementById('btn-pilih');

btnPilih.addEventListener('click', async () => {
  const keyword = inputKota.value.trim();

  if (!keyword) return alert("Isi nama kota dulu");

  const result = await searchCity(keyword);

  const kotaPertama = result[0];
  const cityId = kotaPertama.id;

  // ambil tanggal hari ini
  const today = new Date().toISOString().split("T")[0];

  const jadwal = await getDailySchedule(cityId, today);

  console.log("Kota:", kotaPertama);
  console.log("Jadwal:", jadwal);
});

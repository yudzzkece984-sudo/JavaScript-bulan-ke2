// modules/prayerSchedule.js
// Module untuk menghubungkan UI input kota + tombol dan menampilkan jadwal sholat harian
// Cara pakai (di main.js):
// import { initPrayerModule } from './modules/prayerSchedule.js';
// initPrayerModule();

// NOTE: module ini mengasumsikan ada modul lain yang menyediakan fungsi API:
// - searchCity(keyword) -> Promise<array of city objects>
// - getDailySchedule(cityId, dateStr) -> Promise<dailyScheduleObject>
// Jika Anda belum punya file API, buat simple wrapper yang memanggil
// https://api.myquran.com/v2/sholat/kota/cari/:keyword  dan
// https://api.myquran.com/v2/sholat/jadwal/:cityId/:date
// (date dalam format YYYY-MM-DD)

import { searchCity, getDailySchedule } from './prayerApi.js';

export function initPrayerModule(options = {}) {
  // options memungkinkan override selector bila HTML berbeda
  const selectors = Object.assign({
    input: '#input-kota',
    button: '#btn-pilih',
    status: '#status-kota',
    error: '#error-kota',
    headerDate: '#header-date',
    headerLocation: '#header-location',
    nextPill: '#next-pill',
    nextLabel: '#next-label',
    prayerTimesContainer: '#prayer-times', // container yang memuat .prayer-time[data-prayer="..."]
  }, options);

  const input = document.querySelector(selectors.input);
  const button = document.querySelector(selectors.button);
  const statusEl = document.querySelector(selectors.status) || createSmallStatus(selectors.status);
  const errorEl = document.querySelector(selectors.error) || createSmallError(selectors.error);
  const headerDate = document.querySelector(selectors.headerDate);
  const headerLocation = document.querySelector(selectors.headerLocation);
  const nextPill = document.querySelector(selectors.nextPill);
  const nextLabel = document.querySelector(selectors.nextLabel);
  const prayerTimesContainer = document.querySelector(selectors.prayerTimesContainer);

  if (!input || !button || !prayerTimesContainer) {
    console.error('prayerSchedule: HTML element required not found. Check selectors or provide options.');
    return;
  }

  // Map element references for each prayer by data-prayer attribute
  const prayerNames = ['imsak','subuh','terbit','dhuha','dzuhur','ashar','maghrib','isya'];
  const prayerEls = {};
  prayerNames.forEach(name => {
    const el = prayerTimesContainer.querySelector(`.prayer-time[data-prayer="${name}"]`);
    if (el) prayerEls[name] = el;
  });

  // helper untuk menampilkan tanggal header
  if (headerDate) headerDate.textContent = `Hari ini • ${getTodayForDisplay()}`;

  // Event
  button.addEventListener('click', async () => {
    clearError();
    const keyword = (input.value || '').trim();
    if (!keyword) {
      showError('Masukkan nama kota.');
      return;
    }

    setStatus('Mencari kota...');
    try {
      const cities = await searchCity(keyword);
      if (!cities || cities.length === 0) {
        throw new Error('Kota tidak ditemukan');
      }

      const city = cities[0]; // versi simple: ambil yang pertama
      const cityId = city.id || city.id_kota || city.id_kabupaten || city.kode; // cermat terhadap properti
      const lokasi = `${city.lokasi || city.nama || city.kota || city.nama_kota || city.nama_kab}`;

      // simpan ke localStorage sederhana
      localStorage.setItem('pray_cityId', cityId);
      localStorage.setItem('pray_lokasi', lokasi);

      setStatus('Mengambil jadwal...');
      const todayISO = getTodayISO(); // YYYY-MM-DD
      const daily = await getDailySchedule(cityId, todayISO);
      if (!daily || !daily.jadwal) throw new Error('Gagal mengambil jadwal');

      // update UI
      if (headerDate) headerDate.textContent = `Hari ini • ${getTodayForDisplay()}`;
      if (headerLocation) headerLocation.textContent = `${daily.lokasi?.nama || lokasi} — ${daily.lokasi?.daerah || city.provinsi || ''}`;

      // jadwal API biasanya ada properti waktu per sholat
      // contoh: daily.jadwal === { imsak: '04:25', subuh: '04:35', ... }
      const jadwal = daily.jadwal;
      prayerNames.forEach(p => {
        if (prayerEls[p]) prayerEls[p].textContent = jadwal[p] ?? '-';
      });

      // menentukan next sholat
      const next = determineNextPrayer(jadwal);
      if (nextPill) nextPill.textContent = 'Next';
      if (nextLabel) nextLabel.textContent = `Sholat berikutnya: ${capitalize(next.name)}${next.time ? ' — ' + next.time : ''}`;

      // bonus: tambahkan countdown kalau mau
      // clear status
      clearStatus();

    } catch (err) {
      clearStatus();
      showError(err.message || 'Terjadi kesalahan');
      console.error(err);
    }
  });

  // small helpers
  function setStatus(text) {
    if (statusEl) {
      statusEl.textContent = text;
      statusEl.style.display = 'inline';
    }
  }
  function clearStatus() {
    if (statusEl) statusEl.style.display = 'none';
  }
  function showError(text) {
    if (errorEl) {
      errorEl.textContent = text;
      errorEl.style.display = 'block';
    } else {
      alert(text);
    }
  }
  function clearError() {
    if (errorEl) errorEl.style.display = 'none';
    if (errorEl) errorEl.textContent = '';
  }
}

// ---------- Utility functions ----------
function getTodayForDisplay() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2,'0');
  const mm = String(d.getMonth() + 1).padStart(2,'0');
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}
function getTodayISO() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2,'0');
  const mm = String(d.getMonth() + 1).padStart(2,'0');
  const yyyy = d.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

function capitalize(s){ if(!s) return s; return s.charAt(0).toUpperCase() + s.slice(1); }

// jadwal: object with keys imsak, subuh, terbit, dhuha, dzuhur, ashar, maghrib, isya (values: 'HH:mm')
function determineNextPrayer(jadwal){
  const order = ['subuh','dzuhur','ashar','maghrib','isya'];
  const now = new Date();
  const today = now.toISOString().slice(0,10); // YYYY-MM-DD

  // create array of {name, date}
  const times = [];
  order.forEach(name => {
    const t = jadwal[name];
    if (!t) return;
    const [hh,mm] = t.split(':').map(x=>parseInt(x,10));
    const dt = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hh, mm, 0);
    times.push({name, time: t, date: dt});
  });

  // find first time > now
  for (let i=0;i<times.length;i++){
    if (times[i].date > now) return {name: times[i].name, time: times[i].time};
  }

  // kalau sudah lewat semua (misal malam setelah isya), kembalikan Subuh besok
  // gunakan waktu subuh dari jadwal jika tersedia (as string) — but that would be for today; in simple mode return subuh
  return {name: 'subuh', time: jadwal['subuh'] || null};
}

// helper untuk membuat status/error ketika elemen tidak ada di HTML
function createSmallStatus(selector){
  const el = document.createElement('div');
  el.id = selector.replace('#','');
  el.style.fontSize = '12px';
  el.style.marginTop = '6px';
  el.style.display = 'none';
  document.body.appendChild(el);
  return el;
}
function createSmallError(selector){
  const el = document.createElement('div');
  el.id = selector.replace('#','');
  el.style.fontSize = '12px';
  el.style.color = 'red';
  el.style.marginTop = '6px';
  el.style.display = 'none';
  document.body.appendChild(el);
  return el;
}

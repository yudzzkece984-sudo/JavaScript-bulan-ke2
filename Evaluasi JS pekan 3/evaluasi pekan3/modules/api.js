

const BASE_URL = 'https://api.myquran.com/v2/';

export async function searchCity(keyword) {
  const res = await fetch(`${BASE_URL}sholat/kota/cari/${keyword}`);
  if (!res.ok) throw new Error('Gagal mencari kota');
    const data = await res.json();
    return data.data;
}

export async function getCityById(id) {
    const res = await fetch(`${BASE_URL}sholat/kota/${id}`);
    if (!res.ok) throw new Error('Gagal mendapatkan data kota');
    const data = await res.json();
    return data.data;
}
export async function getDailySchedule(cityId, dateString) {
    const res = await fetch(`${BASE_URL}sholat/jadwal/${cityId}/${dateString}`);
    if (!res.ok) throw new Error('Gagal mendapatkan jadwal harian');
    const data = await res.json();
    return data.data;
}
export async function getMonthlySchedule(cityId, year, month) {
    const res = await fetch(`${BASE_URL}sholat/jadwal/${cityId}/${year}/${month}`);
    if (!res.ok) throw new Error('Gagal mendapatkan jadwal kota, tahunan, bulanan');
    const data = await res.json();
    return data.data;
}
export async function getRandomAyat() {
    const res = await fetch(`${BASE_URL}quran/ayat/random`);
    if (!res.ok) throw new Error('Gagal mendapatkan ayat random');
    const data = await res.json();
    return data.data;
}
export async function getRandomHaditsArbain() {
    const res = await fetch(`${BASE_URL}hadits/arbain/random`);
    if (!res.ok) throw new Error('Gagal mendapatkan hadits arbain random');
    const data = await res.json();
    return data.data;
}
export async function getRandomDoa() {
    const res = await fetch(`${BASE_URL}doa/random`);
    if (!res.ok) throw new Error('Gagal mendapatkan doa random');
    const data = await res.json();
    return data.data;
}
export async function getRandomAsmaulHusna() {
    const res = await fetch(`${BASE_URL}asmaul-husna/random`);
    if (!res.ok) throw new Error('Gagal mendapatkan asmaul husna random');
    const data = await res.json();
    return data.data;
}
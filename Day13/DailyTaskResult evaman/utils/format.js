function judul(angka) {

  return angka
    .toLowerCase()
    .split(' ')
    .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(' ');
}

module.exports = { judul };

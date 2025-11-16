//no.1
const dataDiri = {
  nama: "Yusril Yudistira",
  umur: 19,
  alamat: "Jl. KH Ahmad Dahlan"
};

console.log(dataDiri);

//no.2
localStorage.setItem("dataDiri", JSON.stringify(dataDiri));

const dataTersimpan = JSON.parse(localStorage.getItem("dataDiri"));

console.log(dataTersimpan);
console.log(dataTersimpan.nama);
console.log(dataTersimpan.umur);
console.log(dataTersimpan.alamat);

//no.3
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log("Data pengguna:");
    console.log(data);
  })
  .catch(error => {
    console.error("Terjadi kesalahan:", error);
  });

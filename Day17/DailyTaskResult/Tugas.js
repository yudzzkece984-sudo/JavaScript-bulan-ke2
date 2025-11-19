//Easy Level
// ## 1. Mengambil Data User Sederhana

// **Study Case**

// async function getUser() {
//   try {
//     const res = await fetch("https://dummyjson.com/users/1");
//     const data = await res.json();
//     console.log(data);
//   } catch(error) {
//     console.error("Gagal mengambil data:", error);
//   }
// }
// getUser();

// **Challenge**

// * Tampilkan hanya `nama` dan `umur`.
// * Simpan data ke `localStorage` dengan key `"user_1"`.

// ---

async function getUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/1");
    const data = await res.json();
    const userInfo = {
        //menampilkan nama dan umur saja
      nama: data.firstName + " " + data.lastName,
      umur: data.age
    };
    console.log(userInfo);

    //menyimpan data ke localStorage dengan key "user_1"
    localStorage.setItem("user_1", JSON.stringify(userInfo));
  } catch(error) {
    console.error("Gagal mengambil data:", error);
  }
}
getUser();

// ## 2. Menangani Error Ketika API Tidak Ditemukan

// ```js
// async function loadErrorExample() {
//   try {
//     const res = await fetch("https://dummyjson.com/halaman-yang-tidak-ada");

//     if (!res.ok) {
//       throw new Error("Halaman tidak ditemukan (404)");
//     }

//     const data = await res.json();
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// ```

// **Challenge**

// * Simpan error ke `"last_error"` di localStorage.
// * Buat alert sederhana berisi pesan error.

// ---

async function loadErrorExample() {
  try {
    const res = await fetch("https://dummyjson.com/halaman-yang-tidak-ada");

    if (!res.ok) {
      throw new Error("Halaman tidak dapat ditemukan (404)");
    }

    const data = await res.json();
  } catch (error) {
    console.error(error.message);

    //menyimpan error ke localStorage dengan key "last_error"
    localStorage.setItem("last_error", error.message);

    //membuat alert sederhana berisi pesan error
    alert(error.message);
  }
}
loadErrorExample();

// ## 3. Fetch → json() → Menampilkan Daftar Judul Produk

// ```js
// async function getProducts() {
//   const res = await fetch("https://dummyjson.com/products");
//   const { products } = await res.json();
//   console.log(products.map(p => p.title));
// }
// ```

// **Challenge**

// * Tampilkan hanya produk yang harganya > 100.
// * Simpan daftar harga ke localStorage.

// ---

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  console.log(products.map(p => p.title));
}

//menampilkan produk dengan harga > 100
async function getExpensiveProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
    const expensiveProducts = products.filter(p => p.price > 100);
    console.log(expensiveProducts.map(p => p.title));

//menyimpan daftar harga ke localStorage
    const prices = expensiveProducts.map(p => p.price);
    localStorage.setItem("expensive_product_prices", JSON.stringify(prices));
}
getExpensiveProducts();

//## 4. Refactor Callback ke async/await

// Callback:

// ```js
// function loadData(callback) {
//   setTimeout(() => callback("Data siap"), 1000);
// }
// ```

// Async version:

// ```js
// function loadDataPromise() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Data siap"), 1000);
//   });
// }

// async function run() {
//   const hasil = await loadDataPromise();
//   console.log(hasil);
// }
// ```

// **Challenge**

// * Tambahkan kemungkinan gagal (reject).
// * Tangani error dengan try/catch.

// ---
function loadDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; //50% chance of success
      if (success) {
        resolve("Data siap");
      } else {
        reject("Gagal memuat data");
      }
    }, 1000);
  });
}

async function run() {
  try {
    const hasil = await loadDataPromise();
    console.log(hasil);
  } catch (error) {
    console.error("Error:", error);
  }
}
run();


//## 5. Fungsi Delay Menggunakan Promise + Async

// ```js
// function delay(ms) {
//   return new Promise(res => setTimeout(res, ms));
// }

// async function runStep() {
//   console.log("Mulai");
//   await delay(1000);
//   console.log("Selesai 1 detik");
// }
// ```

// **Challenge**

// * Buat 3 step berurutan (delay 500, 1500, 2000 ms).
// * Simpan waktu selesai ke localStorage.

// ---
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}
async function runSteps() {
  console.log("Mulai");
  await delay(500);
  console.log("Selesai 0.5 detik");
  await delay(1500);
  console.log("Selesai 1.5 detik");
  await delay(2000);
  console.log("Selesai 2 detik");

  //menyimpan waktu selesai ke localStorage
  const finishTime = new Date().toISOString();
  localStorage.setItem("finish_time", finishTime);
}

//## 6. Fetch Data Cart + Simpan ke localStorage

// ```js
// async function loadCart() {
//   const res = await fetch("https://dummyjson.com/carts/1");
//   const cart = await res.json();
//   localStorage.setItem("cart", JSON.stringify(cart));
// }
// ```

// **Challenge**

// * Ambil kembali cart dari localStorage dan tampilkan.
// * Hitung total harga barang.

// ---

async function loadCart() {
  const res = await fetch("https://dummyjson.com/carts/1");
  const cart = await res.json();
  localStorage.setItem("cart", JSON.stringify(cart));
}
loadCart().then(() => {
  //mengambil kembali cart dari localStorage
  const cartData = JSON.parse(localStorage.getItem("cart"));
  console.log("Cart Data:", cartData);
  //menghitung total harga barang
  const totalHarga = cartData.products.reduce((total, item) => total + item.price * item.quantity, 0);
  console.log("Total Harga Barang:", totalHarga);
});
runSteps();

//## 7. Validasi Input Menggunakan Try/Catch

// ```js
// async function saveName(name) {
//   try {
//     if (name.length < 3) throw new Error("Nama terlalu pendek");
//     localStorage.setItem("username", name);
//     console.log("Nama disimpan");
//   } catch(error) {
//     console.log(error.message);
//   }
// }
// ```

// **Challenge**

// * Jika error → simpan ke `"error_name"`.
// * Jika sukses → tambahkan timestamp.

// ---

async function saveName(name) {
  try {
    if (name.length < 3) throw new Error("Nama terlalu pendek");
    const timestamp = new Date().toISOString();
    localStorage.setItem("username", JSON.stringify({name, timestamp}));
    console.log("Nama disimpan");
  } catch(error) {
    console.log(error.message);
    //menyimpan error ke localStorage dengan key "error_name"
    localStorage.setItem("error_name", error.message);
  }
}
saveName("Jo");
saveName("Jonathan");

//## 8. Filter Data Hasil Fetch

// ```js
// async function getExpensive() {
//   const res = await fetch("https://dummyjson.com/products");
//   const { products } = await res.json();
//   const expensive = products.filter(p => p.price > 300);
//   console.log(expensive);
// }
// ```

// **Challenge**

// * Simpan list produk mahal ke localStorage.
// * Urutkan berdasarkan harga (descending).

// ---

async function getExpensive() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  const expensive = products
    .filter(p => p.price > 300)
    .sort((a, b) => b.price - a.price);
  console.log(expensive);

  //menyimpan list produk mahal ke localStorage
  localStorage.setItem("expensive_products", JSON.stringify(expensive));
}
getExpensive();

//Medium Level
//## 9. POST: Mengirim Data ke API

// ```js
// async function createUser() {
//   try {
//     const res = await fetch("https://dummyjson.com/users/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: "Santri", age: 20 })
//     });

//     console.log(await res.json());
//   } catch(error) {
//     console.log("Gagal:", error);
//   }
// }
// ```

// **Challenge**

// * Tambahkan field “skills”.
// * Simpan respons API ke localStorage.

// ---
async function createUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Santri", age: 20, skills: ["JavaScript", "HTML", "CSS"] })
    });
    const data = await res.json();
    console.log(data);
    //menyimpan respons API ke localStorage
    localStorage.setItem("created_user", JSON.stringify(data));
  } catch(error) {
    console.log("Gagal:", error);
  }
}
createUser();

//## 10. PUT: Update Data

// ```js
// async function updateUser() {
//   const res = await fetch("https://dummyjson.com/users/1", {
//     method: "PUT",
//     body: JSON.stringify({ name: "Nama Baru" })
//   });

//   console.log(await res.json());
// }
// ```

// **Challenge**

// * Tambahkan validasi: jika nama kosong → throw error.
// * Simpan data hasil update ke localStorage.

// ---

async function updateUser(newName) {
  try {
    if (!newName) throw new Error("Nama tidak boleh kosong");
    const res = await fetch("https://dummyjson.com/users/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName })
    });
    const data = await res.json();
    console.log(data);
    //menyimpan data hasil update ke localStorage
    localStorage.setItem("updated_user", JSON.stringify(data));
  } catch (error) {
    console.error("Error:", error.message);
  }
}
updateUser("");
updateUser("Nama Baru");

//## 11. DELETE: Menghapus Data

// ```js
// async function deleteUser() {
//   const res = await fetch("https://dummyjson.com/users/1", { method: "DELETE" });
//   console.log(await res.json());
// }
// ```

// **Challenge**

// * Jika sukses → tampilkan alert “User terhapus”.
// * Simpan log ke localStorage.

// ---

async function deleteUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/1", { method: "DELETE" });
    const data = await res.json();
    console.log(data);
    alert("User terhapus");
    //menyimpan log ke localStorage
    const log = {
      message: "User terhapus",
      timestamp: new Date().toISOString()
    };
    localStorage.setItem("delete_user_log", JSON.stringify(log));
  } catch (error) {
    console.error("Gagal menghapus user:", error);
  }
}
deleteUser();

//## 12. Fetch → Transform → Simpan

// ```js
// async function transformProducts() {
//   const res = await fetch("https://dummyjson.com/products");
//   const { products } = await res.json();

//   const names = products.map(p => p.title.toUpperCase());
//   localStorage.setItem("product_names", JSON.stringify(names));
// }
// ```

// **Challenge**

// * Simpan hanya produk yang rating-nya > 4.5.

// ---

async function transformProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  const highRatedNames = products
    .filter(p => p.rating > 4.5)
    .map(p => p.title.toUpperCase());
  localStorage.setItem("high_rated_product_names", JSON.stringify(highRatedNames));
}
transformProducts();

//## 13. Gabungan map + filter + reduce

// ```js
// async function analyzeProducts() {
//   const res = await fetch("https://dummyjson.com/products");
//   let { products } = await res.json();

//   const expensive = products
//     .filter(p => p.price > 100)
//     .map(p => p.price)
//     .reduce((a, b) => a + b);
  
//   console.log(expensive);
// }
// ```

// **Challenge**

// * Simpan total harga tersebut.

// ---

async function analyzeProducts() {
  const res = await fetch("https://dummyjson.com/products");
  let { products } = await res.json();
  const totalExpensive = products
    .filter(p => p.price > 100)
    .map(p => p.price)
    .reduce((a, b) => a + b, 0);
  console.log(totalExpensive);
  //menyimpan total harga ke localStorage
  localStorage.setItem("total_expensive_price", totalExpensive.toString());
}
analyzeProducts();

//## 14. Parallel Request (Promise.all)

// ```js
// async function loadDashboard() {
//   const [users, products] = await Promise.all([
//     fetch("https://dummyjson.com/users").then(r => r.json()),
//     fetch("https://dummyjson.com/products").then(r => r.json())
//   ]);

//   console.log(users, products);
// }
// ```

// **Challenge**

// * Simpan dashboard ke localStorage.
// * Tambahkan timestamp.

// ---

async function loadDashboard() {
  const [usersRes, productsRes] = await Promise.all([
    fetch("https://dummyjson.com/users"),
    fetch("https://dummyjson.com/products")
  ]);
  const users = await usersRes.json();
  const products = await productsRes.json();
  console.log(users, products);

  //menyimpan dashboard ke localStorage dengan timestamp
  const dashboard = {
    users,
    products,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem("dashboard_data", JSON.stringify(dashboard));
}
loadDashboard();

//## 15. Fallback ke localStorage Saat Fetch Gagal

// ```js
// async function loadSettings() {
//   try {
//     const res = await fetch("/api/settings");
//     const settings = await res.json();
//     localStorage.setItem("settings", JSON.stringify(settings));
//     return settings;
//   } catch {
//     return JSON.parse(localStorage.getItem("settings") || "{}");
//   }
// }
// ```

// **Challenge**

// * Tambahkan default settings jika keduanya gagal.

// ---

async function loadSettings() {
  const defaultSettings = { theme: "light", notifications: true };
  try {
    const res = await fetch("/api/settings");
    const settings = await res.json();
    localStorage.setItem("settings", JSON.stringify(settings));
    return settings;
  } catch {
    const localSettings = JSON.parse(localStorage.getItem("settings") || "null");
    return localSettings || defaultSettings;
  }
}
loadSettings().then(settings => console.log("Loaded Settings:", settings));

//## 16. Modular: File api.js + app.js

// **api.js**

// ```js
// export async function getUsers() {
//   const res = await fetch("https://dummyjson.com/users");
//   return res.json();
// }
// ```

// **app.js**

// ```js
// import { getUsers } from "./api.js";

// async function run() {
//   console.log(await getUsers());
// }
// run();
// ```

// **Challenge**

// * Tambahkan fungsi `getProducts()`.

// ---

// api.js
export async function getUsers() {
  const res = await fetch("https://dummyjson.com/users");
  return res.json();
}
export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}
// app.js
import { getUsers, getProducts } from "./api.js";
async function run() {
  console.log("Users:", await getUsers());
  console.log("Products:", await getProducts());
}
run();

//## 17. Membuat Middleware Async Sederhana

// ```js
// async function withLog(fn) {
//   return async function(...args) {
//     console.log("Mulai...");
//     const hasil = await fn(...args);
//     console.log("Selesai...");
//     return hasil;
//   }
// }

// async function ambilData() {
//   const res = await fetch("https://dummyjson.com/products/1");
//   return res.json();
// }

// withLog(ambilData)();
// ```

// **Challenge**

// * Tambahkan error log bila error terjadi.

// ---

async function withLog(fn) {
  return async function(...args) {
    console.log("Mulai...");
    try {
      const hasil = await fn(...args);
      console.log("Selesai...");
      return hasil;
    } catch (error) {
      console.error("Error terjadi:", error);
      throw error;
    }
  }
}
async function ambilData() {
  const res = await fetch("https://dummyjson.com/products/1");
  return res.json();
}
withLog(ambilData)();

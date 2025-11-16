const productList = document.getElementById('product-list');

const dataProduk = JSON.parse(localStorage.getItem('produkPC') || '[]');

dataProduk.forEach(produk => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${produk.nama}</strong><br>
                    Harga: ${produk.harga}<br>
                    Spesifikasi: ${produk.spesifikasi}`;
    productList.appendChild(li);
});

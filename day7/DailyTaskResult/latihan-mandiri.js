let nama = ["firman, fadhli, dafa, lukman, akbar"]
console.log(barang);

nama.push("randi"); //["firman, fadhli, dafa, lukman, akbar, randi"]
nama.unshift("faisal"); // ["faisal, firman, fadhli, dafa, lukman, akbar, randi"]
console.log(barang);

nama.pop(); //menghapus "randi"
nama.shift(); //menghapus "faisal"
console.log(barang);

nama.splice(1, 1, "hamdan"); // menyisipkan "hamdan" di index ke -2
console.log(nama);
let belanja = ["rokok, korek api, vape, bantal, kasur"]
console.log(belanja);

belanja.push("selimut"); //["rokok, korek api, vape, bantal, kasur, selimut"]
belanja.unshift("kain"); //["kain, rokok, korek api, vape, bantal, kasur"]
console.log(belanja);

belanja.pop(); //menghapus "selimut"
belanja.shift(); //menghapus "kain"
console.log(belanja);

belanja.splice(1, 1, "meja"); // menyisipkan "meja" di index ke -2
console.log(belanja.length);
console.log(belanja);

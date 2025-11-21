// **Challenge:**

// * Kalau `count` kelipatan 10 → tampilkan pesan spesial lain.
// * Kalau `count` > 30 → ubah warna text count jadi merah.

// ---

    const countEl = document.getElementById("count");
    const btn = document.getElementById("btn-plus");
    const msg = document.getElementById("msg");
    let count = 0;
    btn.addEventListener("click", () => {
      count++;
      countEl.textContent = count;
        if (count % 10 === 0) {
            msg.textContent = `Wow! Kamu sudah mencapai ${count}!`;
        } else if (count >= 10) {
            msg.textContent = "Wah, rajin banget yah!";
        } else {
            msg.textContent = "WOW, Ngerjain tugas ni!";
        } if (count >= 20) {
            msg.textContent = "Hebat, terus semangat!";
        } else if (count % 20 === 0) {
            msg.textContent = "Semangat Ya!";
        } if (count > 30) {
            countEl.style.color = "red";
        } else {
            countEl.style.color = "black";
        }
    });

//=====================================

// **Challenge:**

// * Kalau `li` diklik (bukan tombol Hapus) → toggle class `done` (teks dicoret).
// * Tambah info jumlah tugas total & tugas yang sudah selesai.

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-add");
const list = document.getElementById("todo-list");
const info = document.getElementById("info");

// Update info total dan selesai + tampilkan di console
function updateInfo() {
  const total = list.querySelectorAll("li").length;
  const done = list.querySelectorAll(".done").length;
  const text = `Total: ${total} | Selesai: ${done}`;

  info.textContent = text;
  console.log("INFO:", text);
}

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  console.log("Tambah tugas:", text);

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  // Klik teks → toggle selesai
  span.addEventListener("click", () => {
    li.classList.toggle("done");
    console.log("Toggle selesai:", span.textContent, "->", li.classList.contains("done"));
    updateInfo();
  });

  // Tombol hapus
  const delBtn = document.createElement("button");
  delBtn.textContent = "Hapus";
  delBtn.addEventListener("click", () => {
    console.log("Hapus tugas:", span.textContent);
    li.remove();
    updateInfo();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
  updateInfo();
});

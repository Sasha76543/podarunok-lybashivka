const modal = document.getElementById("modal");

document.getElementById("openModal").onclick = () => {
  modal.style.display = "block";
};

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const misto = document.getElementById("misto").value;

  const token = "8362558312:AAGkLAPiG7uNOs__Bc7x-sCT8Aw9v0IJxdQ";
  const chat_id = "5437654010";

  const message = `Нове замовлення:%0AІм'я: ${name}%0AТелефон: ${phone} %0AДата: ${date} %0AМісце: ${misto}`;

fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`)
    .then(() => {
      alert("Заявка відправлена!");

      // 👉 очистка форми
      document.getElementById("form").reset();

      // 👉 закриття модалки
      modal.style.display = "none";
    })
    .catch(() => {
      alert("Помилка!");
    });
});

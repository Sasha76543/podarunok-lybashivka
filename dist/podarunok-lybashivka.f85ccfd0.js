const modal = document.getElementById("modal");
document.getElementById("openModal").onclick = ()=>{
    modal.style.display = "block";
};
document.querySelector(".close").onclick = ()=>{
    modal.style.display = "none";
};
window.onclick = (e)=>{
    if (e.target === modal) modal.style.display = "none";
};
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const misto = document.getElementById("misto").value;
    const token = "8362558312:AAGkLAPiG7uNOs__Bc7x-sCT8Aw9v0IJxdQ";
    const chat_id = "5437654010";
    const message = `\u{41D}\u{43E}\u{432}\u{435} \u{437}\u{430}\u{43C}\u{43E}\u{432}\u{43B}\u{435}\u{43D}\u{43D}\u{44F}:%0A\u{406}\u{43C}'\u{44F}: ${name}%0A\u{422}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}: ${phone} %0A\u{414}\u{430}\u{442}\u{430}: ${date} %0A\u{41C}\u{456}\u{441}\u{446}\u{435}: ${misto}`;
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`).then(()=>{
        alert("\u0417\u0430\u044F\u0432\u043A\u0430 \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430!");
        // 👉 очистка форми
        document.getElementById("form").reset();
        // 👉 закриття модалки
        modal.style.display = "none";
    }).catch(()=>{
        alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430!");
    });
});

//# sourceMappingURL=podarunok-lybashivka.f85ccfd0.js.map

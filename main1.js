// Password uchun

const password__btn = document.getElementById("password__btn");
const password__input = document.getElementById("password__input");

password__btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (password__input.value === "ADMIN") {
    window.location.href = "./_index.html"; // Bosh sahifaga o'tkazish
  } else {
    alert("Login yoki parol xato. Qaytadan urinib ko‘ring.");
  }

  console.log(password__input.value);
});

// Password uchun

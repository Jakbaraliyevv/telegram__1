// Ikkinchi variyandi

const input__text__For__sarvar = document.getElementById(
  "input__text__For__sarvar"
);

const send__btn__for__sarvar = document.getElementById(
  "send__btn__for__sarvar"
);

const massage__div = document.querySelector(".massage__div");

const apii = "https://6718988a7fc4c5ff8f4a1f17.mockapi.io/users";

function date() {
  let date = new Date();
  let hour = date.getHours() > 10 ? 0 + date.getHours() : date.getHours();
  let minute =
    date.getMinutes() > 10 ? 0 + date.getMinutes() : date.getMinutes();
  return `${hour}:${minute}`;
}

function post__Sarvar() {
  fetch(apii, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: input__text__For__sarvar.value,
      ID: 1,
      date: date(),
    }),
  })
    .then((data) => data.json())
    .then((data) => console.log(data))

    .catch((error) => console.log(error.massage));
}

send__btn__for__sarvar.addEventListener("click", (e) => {
  e.preventDefault();

  if (input__text__For__sarvar.value !== "") {
    post__Sarvar();
    input__text__For__sarvar.value = "";
  }
});

fetch(apii)
  .then((data) => data.json())
  .then((value) => get__me__text(value))
  .catch((error) => console.log(error.message)); // error.massage emas, error.message

function get__me__text(value) {
  value.forEach((element) => {
    if (element.ID === 1) {
      massage__div.innerHTML += `
        <div class="massage__textme">
          <p>${element.text}</p>
          <div class="data__time">
            <span>${element.date}</span>
            <img src="./img/check.svg" alt="" />
          </div>
        </div>
      `;
    } else if (element.ID === 2) {
      massage__div.innerHTML += `
        <div class="massage__text">
          <img src="${element.image_user}" alt="Yuklangan rasm" style="max-width: 200px; border-radius: 10px;">
          <p>${element.text}</p>
          <div class="data__time">
            <span>${element.date}</span>
          </div>
        </div>
      `;
    }
  });
}

// Uje yangi narsalaga otyappiz rasm yuklash endi
const rasm = document.getElementById("rasm");
const fileInput = document.getElementById("fileInput");

rasm.addEventListener("click", () => {
  fileInput.click();
});

// // psot img bu

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imgData = event.target.result;

      fetch("https://6718988a7fc4c5ff8f4a1f17.mockapi.io/send_img", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image_user: imgData,
          ID: 1,
          date: date(),
        }),
      })
        .then((response) => {
          return response.json(); // Agar serverdan JSON formatida javob kelsa
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    };

    reader.readAsDataURL(file);
  } else {
    console.error("Fayl tanlanmadi!");
  }
});

// Get img uchun

fetch("https://6718988a7fc4c5ff8f4a1f17.mockapi.io/send_img").then((data) =>
  data.json().then((value) => get__img(value))
);
function get__img(value) {
  value.forEach((element) => {
    if (element.ID === 1) {
      massage__div.innerHTML += `
<div class="massage__textme">
  <img src="${element.image_user}" alt="Yuklangan rasm" style="max-width: 200px; border-radius: 10px;">
  <div class="data__time">
    <span>${element.date}</span>
    <img src="./img/check.svg" alt="" />

  </div>
</div>
`;
    } else if (element.ID === 2) {
      massage__div.innerHTML += `
<div class="massage__textme">
  <img src="${element.image_user}" alt="Yuklangan rasm" style="max-width: 200px; border-radius: 10px;">
  <div class="data__time">
    <span>${element.date}</span>
  </div>
</div>
`;
    }
  });
}

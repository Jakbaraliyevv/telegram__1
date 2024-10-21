// const sarvar__api = "https://6715fa1733bc2bfe40bbca78.mockapi.io/Sarvarbek";
// const me__api = `https://6715fa1733bc2bfe40bbca78.mockapi.io/Azizakam`;

// const input__text__For__sarvar = document.getElementById(
//   "input__text__For__sarvar"
// );

// const send__btn__for__sarvar = document.getElementById(
//   "send__btn__for__sarvar"
// );

// const massage__div = document.querySelector(".massage__div");
// BU ozgaruvchilar tepadagilar

// function post__Sarvar() {
//   fetch(sarvar__api, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       text: input__text__For__sarvar.value,
//     }),
//   })
//     .then((data) => data.json())
//     .then((data) => console.log(data))

//     .catch((error) => console.log(error.massage));
// }

// send__btn__for__sarvar.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (input__text__For__sarvar.value !== "") {
//     post__Sarvar();
//     input__text__For__sarvar.value = "";
//   }
// });

// // Bu sarvarga yozgan ozimni xabarim

// fetch(me__api)
//   .then((data) => data.json())
//   .then((value) => get__sarvar__text(value))
//   .catch((error) => console.log(error.massage));

// function get__sarvar__text(value) {
//   value.forEach((element) => {
//     massage__div.innerHTML += `
//      <div class="massage__text">
//               <p>${element.text}</p>
//             </div>
//       `;
//   });
// }

// fetch(sarvar__api)
//   .then((data) => data.json())
//   .then((value) => get__me__text(value))
//   .catch((error) => console.log(error.massage));

// function get__me__text(value) {
//   value.forEach((element) => {
//     massage__div.innerHTML += `
//       <div class="massage__textme">
//               <p>${element.text}</p>
//               <img src="./img/check.svg" alt="" />
//             </div>
//       `;
//   });
// }

// Ikkinchi variyandi

const input__text__For__sarvar = document.getElementById(
  "input__text__For__sarvar"
);

const send__btn__for__sarvar = document.getElementById(
  "send__btn__for__sarvar"
);

const massage__div = document.querySelector(".massage__div");

const apii = "https://6716b3593fcb11b265d35fa3.mockapi.io/data";

function post__Sarvar() {
  fetch(apii, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: input__text__For__sarvar.value,
      ID: 2,
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

// // Bu sarvarga yozgan ozimni xabarim

fetch(apii)
  .then((data) => data.json())
  .then((value) => get__me__text(value))
  .catch((error) => console.log(error.massage));

function get__me__text(value) {
  value.forEach((element) => {
    if (element.ID === 2) {
      massage__div.innerHTML += `
      <div class="massage__textme">
              <p>${element.text}</p>
              <img src="./img/check.svg" alt="" />
            </div>
      `;
    } else if (element.ID === 1) {
      massage__div.innerHTML += `
      <div class="massage__text">
               <p>${element.text}</p>
             </div>
       `;
    }
  });
}

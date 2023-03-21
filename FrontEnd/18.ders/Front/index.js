//const axios = require("axios").default;

const sifreInputu = document.getElementById("sifre-inputu");
const emailInputu = document.getElementById("email-inputu");

const kayitEtButtonu = document.getElementById("kayit-ol");

const goz = document.getElementById("goz");

const emailVeSifre = {
  email: "",
  sifre: "",
};

const url = "http://localhost:4000/kayit";

// CLICK
goz.addEventListener("click", () => {
  /**
  1-Yöntem
  const tip = sifreInputu.type;
  if (tip == "password") {
    sifreInputu.type = "text";
  } else {
    sifreInputu.type = "password";
  }
  */
  //2-Yöntem
  sifreInputu.type = "text";
  setTimeout(() => {
    sifreInputu.type = "password";
  }, 3000);
});
kayitEtButtonu.addEventListener("click", () => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  /**
   * get
   * post
   * put
   * delete
   */
});

// KEYUP
emailInputu.addEventListener("keyup", (event) => {
  const value = event.target.value;
  emailVeSifre.email = value;
});
sifreInputu.addEventListener("keyup", (event) => {
  const value = event.target.value;
  emailVeSifre.sifre = value;
});

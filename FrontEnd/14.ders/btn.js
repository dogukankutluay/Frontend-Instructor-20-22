const azaltButtonu = document.querySelector(".azalt");
const cogaltButtonu = document.querySelector(".cogalt");
const numaraYazisi = document.querySelector(".numara");

localStorage.setItem("password", "12346");
/**
const storageSayi = localStorage.getItem("sayi");
numaraYazisi.textContent = storageSayi;
 */
let numara = localStorage.getItem("sayi");
numaraYazisi.textContent = numara;

azaltButtonu.addEventListener("click", function () {
  numara--;

  numaraYazisi.textContent = numara;
  localStorage.setItem("sayi", String(numara));
});
cogaltButtonu.addEventListener("click", function () {
  numara++;

  numaraYazisi.textContent = numara;
  localStorage.setItem("sayi", String(numara));
});

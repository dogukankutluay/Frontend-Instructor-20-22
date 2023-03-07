/**
yasiKontrolEt
  .then((data) => {
    console.log("DOĞRU KISIM");
    console.log(data);
  })
 */

// 2-
// EVENT LOOP

// DEBUG

// const yas = 190;
// const yasiKontrolEt = new Promise((resolve, reject) => {
//   if (yas > 100) reject("Hatalı durum");
//   else resolve("Hatasız durum");
// });

// const kontrol = async () => {
//   try {
//     const sonuc = await yasiKontrolEt;

//     console.log(sonuc);
//   } catch (error) {
//     console.log(error);
//   }
// };

// kontrol().then(() => {});
//1-
// yasiKontrolEt
//   .then(() => {
//     console.log("Hatasız durum.");

//   })
//   .catch(() => {
//     console.log("Hatalı durum.");
//   });

const email = "test@gmail.com";
const sifre = "1234567";
// VALIDATION
/**
 * 1 sn= 1000
 * 60sn-1dk =60000
 * 1dk-60dk =60000
 *
 */
// const emailKontrol = new Promise((resolve, reject) => {
//   if (email.includes("@")) {
//     setTimeout(() => {
//       resolve("Email Doğru.");
//     }, 3000);
//   } else reject("Email içerisinde @ işareti bulunmalı.");
// });
// const sifreKontrol = new Promise((resolve, reject) => {
//   if (sifre.length > 6) resolve("Şifre Doğru");
//   else reject("Şifre 6 karakterden az olamaz.");
// });

// const kontrol = async () => {
//   try {
//     console.log("Kontrol işlemi başladı.");
//     const emailCoz = await emailKontrol;
//     const sifreCoz = await sifreKontrol;
//     console.log(emailCoz);
//     console.log(sifreCoz);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Kontroller yapıldı.");
//   }
// };

// kontrol().then(() => {});

const deger = () => {};
// Yukarıdaki degerin, typeof'unu yazdıran bir promise yapısı kurup
// async/await ile çözünüz.

const kontrol = (data) => {
  return new Promise((resolve, reject) => {
    resolve(typeof data);
  });
};

const calistir = async () => {
  try {
    const tip = await kontrol(deger);
    console.log(tip);
  } catch (error) {
    console.log(error);
  }
};
calistir().then(() => {});

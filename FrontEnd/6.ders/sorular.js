//1-Soru
// Aşağıda bulunan 'tanitim' fonksiyonunu  'for' ve 'forEach'  döngüsü ile çalıştırınız. Parametre olarak göndereceğiniz iki değer vardır.
// 1. isim 2. yas
// const kullanicilar = [
//   {
//     isim: "Ahmet",
//     yas: 21,
//     tanitim: function (isim, yas) {
//       return `Selam ben ${isim}, yaşım ${yas}.`;
//     },
//   },
//   {
//     isim: "Duygu",
//     yas: 15,
//     tanitim: function (isim, yas) {
//       return `Merhabalar ben ${isim}, hobilerimin arasında bale ve spor ile ilgilenmek var. Henüz ${yas}'da olduğum için baleye kayıt olamıyorum.`;
//     },
//   },
//   {
//     isim: "Ali",
//     yas: 35,
//     tanitim: function (isim, yas) {
//       return `Selam herkese ben ${isim}, bugün benim doğum günüm ve ${yas} yaşına girmiş bulunmaktayım. `;
//     },
//   },
// ];

// CEVAP
// FOR

//CEVAP-1
// for(let index=0;index<kullanicilar.length; index++){
//   const kullanici=kullanicilar[index]
//   const tanitim=kullanici.tanitim(kullanici.isim,kullanici.yas)
//   console.log(tanitim)
// }

//CEVAP-2
// for (let index = 0; index < kullanicilar.length; index++) console.log(kullanicilar[index].tanitim(kullanicilar[index].isim,kullanicilar[index].yas))

// FOREACH

//CEVAP-1
// function cb(kullanici){
//   console.log(kullanici.tanitim(kullanici.isim,kullanici.yas))
// }
// kullanicilar.forEach(cb)

//CEVAP-2
// kullanicilar.forEach(function(kullanici){
//   console.log(kullanici.tanitim(kullanici.isim,kullanici.yas))
// })

//2-Soru
//Aşağıda bulunan cuzdanımız ile, kurlar arrayinden kur satın alacağız. Her bir kurdan 30 bin tl'lik kur satın alacağız.
//Aldığımız 30 bin tl'lik kuru bakiyeden düşeceğiz.
//'kurlar' arrayi console.log ile yazdırıldığında bakiye alınan kurlar kadar eksilmiş olacak.
//Aşağıda bulunan 'eur' ve 'usd' adlı değişkenlere alınan kurlar atama ile atanıp yazdırılacak.

const elimizdekiPara = 30000; // 30 bin TL

const dovizci = [
  {
    kurIsim: "EUR",
    kurDegeri: 20.35, // 0
    bakiye: 10000,
  },
  {
    kurIsim: "USD",
    kurDegeri: 18.79, // 1
    bakiye: 10000,
  },
];

//satın alabildiğimiz dövizleri bu değişkenelere atayacağız
let eur = 0;
let usd = 0;
//               0              2         =
for (let index = 0; index < dovizci.length; index++) {
  const kur = dovizci[index];

  const satinAlabilecegimKur = elimizdekiPara / kur.kurDegeri;
  dovizci[index].bakiye -= satinAlabilecegimKur;

  if (kur.kurIsim == "EUR") {
    eur = satinAlabilecegimKur;
  } else if (kur.kurIsim == "USD") {
    usd = satinAlabilecegimKur;
  }
}
console.log("EUR", eur);
console.log("USD", usd);
console.log(dovizci);
//FOR
// for(let index=0;index<kurlar.length;index++){

//     // Her döngü girişinde kurun atandığı değişken
//     const kur=kurlar[index]

//     // TL ile alacağım kur
//     const alacagimKur=cuzdan.para/kur.kurDegeri

//     // Dövizci'nin bakiyesini düşürmek
//     //1-kullanım
//     // kurlar[index].bakiye = kurlar[index].bakiye - alacagimKur
//     //2-kullanım
//     kurlar[index].bakiye -= alacagimKur

//     if(kur.kurIsim=='EUR'){
//       eur=alacagimKur
//     }else if(kur.kurIsim=='USD'){
//       usd=alacagimKur
//     }

// }

// kurlar.forEach(function (kur, index) {
//   const alacagimKur = cuzdan.para / kur.kurDegeri;
//   kurlar[index].bakiye -= alacagimKur;

//   switch (kur.kurIsim) {
//     case "EUR":
//       eur = alacagimKur;
//       break;
//     case "USD":
//       usd = alacagimKur;
//       break;
//   }
// });

// console.log("EUR ile satın aldığım kur : ", eur);
// console.log("USD ile satın aldığım kur : ", usd);
// console.log(kurlar);

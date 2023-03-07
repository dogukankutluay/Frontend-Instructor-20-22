/*
let isim = "Ahmet";
const yas = 25;
const meslek = 100;

isim = "Hasan";
console.log(isim); */

/**
 * let isim = "Ahmet";
console.log(isim);

isim = "Mehmet";
console.log(isim);
 */
/**
 * for (let i = 0; i < 11; i++) {
  if (i > 5) {
    console.log(i);
  }
}
 */

//const sayilar = [100, 200, 300, 400, 500];
//while
/**
 * let i = 0;
while (i < sayilar.length) {
  const sayi = sayilar[i]; 
  console.log(sayi);
  i++; 

}
 */
//for
/**
 * for (let i = 0; i < sayilar.length; i++) {
  const sayi = sayilar[i];
  console.log(sayi);
}
 */
//foreEach
/**
 * sayilar.forEach(function (sayi) {
  console.log(sayi);
});
 */

//map
//const maaslar = [1000, 2000, 3000, 4000, 5000];

//her bir maaşa 500 TL'lik zam yapılacak

// array push
// map

// OLCAY
/**
 * const maaslar = [1000, 2000, 3000, 4000, 50000];
const zamliMaas = [];
for (i = 0; i < maaslar.length; i++) zamliMaas.push(maaslar[i] + 500);
console.log(zamliMaas);
 */

const maaslar = [1000, 2000, 3000, 4000, 50000];
//arrow
//const zamliMaas = maaslar.map((e) => e + 500);

//primitive
/**
 * const zamliMaas = maaslar.map(function (maas) {
  return maas + 500 + " şu an ki maaş";
});
console.log(zamliMaas);
 */

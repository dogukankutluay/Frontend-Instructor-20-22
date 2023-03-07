// if , else if ve else

// const numara1 = 9;
// const numara2 = 10;

//console.log(numara1 == numara2);

//Scope {} => toplu yazılan kodun çalışacak kapsam alanı

// IF
// if (numara1 == numara2) {
//   console.log("Numara1 Numara2 ye eşittir");
// }
// if (numara1 < numara2) {
//   console.log("Numara1 Numara 2 den küçüktür");
// }
// if (numara1 > numara2) {
//   console.log("Numara1 Numara2 den büyüktür");
// }
// if (numara1 >= numara2) {
//   console.log("Numara1 Numara2 den büyük veya eşittir");
// }
// if (numara1 <= numara2) {
//   console.log("Numara1 Numara2 den küçük veya eşittir");
// }

// ELSE IF

// const isim1 = "Ahmet";
// const isim2 = "Mehmet";

// if (isim1 == isim2) {
//   console.log("İsim1 İsim2 ye eşittir.");
// } else if (isim1 == "Ahmet") {
//   console.log("isim1 değişkeni Ahmet değerine eşittir");
// } else if (isim1 == "Mehmet") {
//   console.log("isim1 değişkeni Mehmet değerine eşittir");
// }

//ELSE
// if (isim1 == isim2) {
//   console.log("İsim1 İsim2 ye eşittir.");
// } else if (isim1 == "Ahmet") {
//   console.log("isim1 değişkeni Ahmet değerine eşittir");
// } else if (isim1 == "Mehmet") {
//   console.log("isim1 değişkeni Mehmet değerine eşittir");
// } else {
//   console.log("Hiçbir sorgu true ifadesini dönmüyor");
// }

// Örnek
//  const biyografi = "Ben bir yazılım mühendisiyim.";

// if (biyografi.includes("mühendisiyim")) 
//   console.log("biyografi değişkeni içerisinde 'mühendisiyim' kelimesi vardır.");
// } else {
//   console.log("abc ifadesi biyografi değişkeni içerisinde bulunamadı");
// }

// if (biyografi[0] == "B") {
//   console.log("0. index B harfine eşittir");
// }



// if (biyografi[3] == "a") {
//   console.log("3. index a harfine eşittir");
// } else {
//   console.log("3. index a harfine eşit DEĞİLDİR!");
// }



// Ternary Operatör
// const biyografi = "Ben bir yazılım mühendisiyim.";

// const ornekTernary=biyografi[0]=='B'?'0. index B harfine eşittir':'0. index B harfine eşit değildir'

// console.log(ornekTernary)

// const isim='Ahmet'

// if(isim=='Ahmet'){
//   console.log('İsim Ahmet değerine eşittir.')
// }else {
//   console.log('İsim Ahmet değerine eşit değildir.')
// }

// function konsolYazdir(){
//   const whileDegeri=true
//   while(whileDegeri){
//     console.log('Sınırsız')
//   }

// }


// // Ternary Operatörü
// isim=='Ahmet' ? console.log('İsim Ahmet değerine eşittir.') : konsolYazdir()


// Switch Case

// if(islem==2){// boolean 
//   console.log('İşlem şu an 2. aşamada')
// }else if(islem==3){
//   console.log('İşlem şu an 3. aşamada')
// }else if(islem==4){
//   console.log('İşlem şu an 4. aşamada')
// }else {
//   console.log('işlem şu an bulunamadı.')
// }
// const islem=5

// switch(islem){
//   case islem==1 :
//     console.log('İşlem şu an 1. aşamada')
//   case islem==2:
//     console.log('İşlem şu an 2. aşamada')
//   case islem==3:
//     console.log('İşlem şu an 3. aşamada')
//   default:
//     console.log('İşlem şu an bulunamadı.')
// }




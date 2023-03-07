// Karşılaştırma Operatörleri

//Karşılaştırma operatörlerin dönüşü bize Boolean(true ve false) tipindedir

// ==   :Eşit mi => 'doğukan'=='doğukan' veya 15==15 veya true==true veya 'ahmet'=='mehmet' veya 15==16
const numara1 = 16;
const numara2 = 15;
//console.log(numara1 == numara2);
const isim1 = "ahmet";
const isim2 = "ahmet";
//console.log(isim1 == isim2);

// != :Eşit değil mi => 'doğukan'!='doğukan' veya 15!=15 veya true!=true veya 'ahmet'!='mehmet' veya 15!=16
//console.log(numara1 != numara2);
//console.log(isim1 != isim2);

// < ve > :Küçük mü || Büyüm mü => 15<15 veya 15<1 veya 12>1 veya 12>12
// console.log(numara1 < numara2);
// console.log(numara1 > numara2);

// <= ve >= :Küçük veya eşit mi || Büyük veya eşit mi => 15<=15 veya 15<=1 veya 12>=1 veya 12>=12

// console.log(numara1 >= numara2);
// console.log(numara1 <= numara2);

//Bit Operatörleri
//Eğer iki sorguyu karşılaştırmak istiyor isem biz bit operatörlerini kullanırız

// && : Ve Operatörü => (numara1 >= numara2) && (numara1 <= numara2)
// iki sorgunun dönüş tipi eğer true ise benim VE operatörü sorgum true göndersin
// ikisinden birisi eğer false ise bana false dönüşü yapsın
// ikisi de false ise bana false dönüşü yapar
const sorgu1 = numara1 >= numara2; //sorgu1 dönüşü false veya true
const sorgu2 = numara1 <= numara2; //sorgu1 dönüşü false veya true

console.log("Sorgu 1 : ", sorgu1);
console.log("Sorgu 2 : ", sorgu2);

// console.log("Sorgu 1 ve Sorgu 2 nin karşılaştırması : ", sorgu1 && sorgu2);

// false =  -
// true  =  +

// || : Yada Operatörü => (numara1 >= numara2) || (numara1 <= numara2)

// iki sorgudan bir tanesi true dönüyor ise bana true döner
// iki sorgudan bir tanesinin false olması bana true döner
// ikisi de false ise bana false dönüşü yapar
console.log("Sorgu 1 ve Sorgu 2 nin karşılaştırması : ", sorgu1 || sorgu2);

// Döngüler

// WHILE Döngüsü

// const sayac=1
// const a=0


// while (sayac<2) { // 1<2 
//     console.log('Selam')
//     // sayac++
//     // sayac=sayac+1
//    a= sayac+3
// }



// const sayac=0

// while(){

// }


// SPLIT

const biyografi='Selam ben Doğukan, ben bir yazılım mühendisiyim, 4alabs şirketinde çalışıyorum.'
console.log(biyografi.split(','))


// let baslangic=0

// while(baslangic<10){
//     console.log('Çalıştı '+baslangic)
//     baslangic=baslangic+1
// }

// let sayac=0

// while(sayac<3){
//     // sayac=2
//     sayac=sayac+1
//     console.log(sayac)
// }



// const numaralar=[1000,1200,1400] 
// let index=0
// while(index<3){ //0 1 2 
//     console.log(numaralar[index])
   
   
//     index=index+1
    
// }




// const numaralar=[1000,1200,1400 ] 

// // FOR
// for (let index = 0; index < numaralar.length; index++) {
//     const deger=numaralar[index]
//     console.log(deger)
// }

// forEach callback function ununu arka tarafta aşağıdaki gibi numaraların uzunluğu kadar çalıştırır
// forEachCallBack(1000,0)
// forEachCallBack(1200,1)
// forEachCallBack(1400,2)
// FOREACH
//  const numaralar=[1000,1200,1400] // Array

//1. kullanım
//cb                    1400   2
// function forEachCallBack(deger,index){
   
//     console.log(deger+' '+index)
// }
// const numaralarYeniData=numaralar.forEach(forEachCallBack)

// 2. kullanım
// numaralar.forEach(

//     function(deger,index){
//         console.log(deger + ' ' + index)
//     }

// )

//ÖRNEK
// const kullanicilar=[
//      {
//         isim:'Ahmet',
//         yas:20
//      },
//      {
//         isim:'Ali',
//         yas:25
//      },
//      {
//         isim:'Mehmet',
//         yas:15
//      }
// ]
// kullanicilar.forEach(
//         function(deger,index,array){
//             // Merhaba ben ahmet, yaşım 20
//             // Merhaba ben ali, yaşım 25
//             // Merhaba ben mehmet, yaşım 15
//             //1. yöntem
//             console.log(`Merhaba ben ${deger.isim}, yaşım ${deger.yas}`)
//             //2. yöntem
//             console.log('Merhaba ben ' + deger.isim + ' yaşım ' + deger.yas)
//         }
//     )

// MAP
// ForEache nazaran sana veri dönüşü yapabilir.
// ForEach ile farkı callBack func return ile bitmelidir data dönüşü için
// const arabalar=['Dacia','Honda','Kia','Bmw']

// const forEachKullimi=arabalar.forEach(function(araba,index){
//     return araba
// })


// const mapKullanimi=arabalar.map(function(araba,index){
//     // araba = Honda , index=1
//      return araba + '.'
// })


// console.log('forEachKullimi '+forEachKullimi)
// console.log('mapKullanimi '+mapKullanimi)




// const arabalar=[
//     {
//         marka:'Dacia',
//         model:2020
//     },
//     {
//         marka:'Bmw',
//         model:2010
//     },
//     {
//         marka:'Audi',
//         model:2023
//     }
// ]

// function arabalarCallBackFunc(araba){
//     return araba.marka+ ' sının'+ ' modeli '+araba.model
// }
// const mapArabalar=arabalar.map(arabalarCallBackFunc)
// console.log(mapArabalar)

// const arabaMarkaları=arabalar.map(function(araba){
//     /**
//      *araba= {
//         marka:'Dacia',
//         model:2020
//        }
//      */
//     return araba.marka
// })
// const arabaModelleri=arabalar.forEach(function(araba){
//     console.log(araba.model)
//     return araba.model
// })
//console.log(arabaModelleri)
// console.log(arabaModelleri)

























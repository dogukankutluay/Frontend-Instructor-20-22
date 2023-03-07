// Fonksiyonlar


// Fonksiyon tanımlama (Function)


// function merhaba(){
//     console.log('Merhaba Ahmet')
// }
// merhaba('Ahmet')


//parametre
// function merhaba(isim){

//     console.log('Merhaba '+isim)
// }

// merhaba('ali')
// merhaba('mehmet')



// function kendiniTanit(isim,yas){

//     // Merhaba ben ali 23 yaşındayım.
//     console.log(`Merhaba ben ${isim} ${yas} yaşındayım.`) //DYNAMIC
// }

//  kendiniTanit('Ali',25)
//  kendiniTanit('Mehmet',20)



// Değer dönüşü yapan fonksiyonlar
//  Fonksiyonlar ile 4 işlem yapılacak ve fonksiyonlar çalıştırılıp console.log ile terimnale yazdırılacak.

// function toplamaIslemi(sayi1,sayi2){
//     return sayi1+sayi2

// }
// function cikarmaIslemi(sayi1,sayi2){
//     return sayi1-sayi2
// }
// function bolmeIslemi(sayi1,sayi2){
//     return sayi1/sayi2
// }
// function carpmaIslemi(sayi1,sayi2){
//     return sayi1*sayi2
// }

// const toplamaSonuc=toplamaIslemi(10,100)
// const cikarmaSonuc=cikarmaIslemi(50,20)
// const bolmeSonuc=bolmeIslemi(15,3)
// const carpmaSonuc=carpmaIslemi(2,2)

// console.log('Toplama işlemi sonuç '+toplamaSonuc)
// console.log('Çıkarma işlemi sonuç '+cikarmaSonuc)
// console.log('Bölme işlemi sonuç '+bolmeSonuc)
// console.log('Çarpma işlemi sonuç '+carpmaSonuc)




// ÖRNEK


function dortIslem(sayi1,sayi2,islem){
    if(islem=='+'){
        return sayi1+sayi2
    }else if(islem=='-'){
        return sayi1-sayi2
    }else if(islem=='/'){
        return sayi1/sayi2
    }else if(islem=='*'){
        return sayi1*sayi2
    }else {
        return 'BU İŞLEM YAPILAMAZ!'
    }
    
}
const sonuc=dortIslem(10,2,'*')
const bolme=dortIslem(20,2,'/')
console.log(bolme)











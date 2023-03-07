// Promise

// call stack
// EVENT LOOP

// 1

// let isim='boş'
// setTimeout(()=>{
//     isim='Ahmet'
// },5000)
// console.log(isim)

//1- dışarıdan 5 saniyede datalar çekicem
//2- dışarıdan çektiğim datalar ile işlem yapacağım

// Tanımlama
//new Promise()

1;
2;
3;
4;
5;
6;
7;
8;
9;
10;

//2-
// arrow
//  const zamaniDurdur=()=>{
//      return new Promise((resolve,reject)=>{
//          //resolve(15)
//          reject('hata oluştu')
//      })
//  }

// // then/catch
// // prototype metotlar
// zamaniDurdur()
// .then((data)=>{
//     console.log('then',data)
// })
// .catch((error)=>{
//     console.log('catch',error)
// })
// .finally(()=>{
//     console.log('son aşama')
// })

// 3-
// const datayiGetir=(data)=>{
//     return new Promise((resolve,reject)=>{
//         // yukarıdaki 'data' ismi 200 den küçükse hata
//         // 200 den büyükse sorunsuz dışarıya aktarın
//         if(data<200){
//             reject('data 200 den küçük')
//         }else {
//             resolve(data)
//         }
//     })
// }

// datayiGetir(199)
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log('İşlemler bitti.')
// })

//4-

// const zamaniDurdur=()=>{
//     return new Promise((resolve,reject)=>{
//         // setTimeout(() => {
//         //     //resolve('Selam 1')
//         // }, 3000);

//     })

// }

// //--
// zamaniDurdur()
// .then((data)=>{
//     console.log(data)
//     console.log('Selam 2')
// })
// //--

//5-
// let isim='boş'
// const isimDegistir=(data)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             isim=data
//             resolve()
//         },3000)
//     })
// }

// isimDegistir('Hasan')
// .then(()=>{
//     console.log(isim)
// })

const kullanicininGirdigiYas = 101;

const yasiKontrolEt = new Promise((resolve, reject) => {
  if (kullanicininGirdigiYas > 100) {
    reject("Yaş 100 den büyük olamaz.");
  } else {
    resolve("Yaş doğru girildi.");
  }
});

yasiKontrolEt
  .then((data) => {
    console.log("DOĞRU KISIM");
    console.log(data);
  })
  .catch((error) => {
    console.log("HATA KISMI");
    console.log(error);
  })
  .finally(() => {
    console.log("KONTROL YAPILDI.");
  });

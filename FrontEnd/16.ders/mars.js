//https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631280305225E03_DXXX.jpg

// DOM => Document Object Modal

const url =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY";

// Sayfa yüklendiğinde çalışacak function
const sayfaYuklendiginde = () => {
  //Nasa api'sini tarafından dönen dataları getirir.
  const marsFotograflariniGetir = () => {
    //Fetch isteği  'url' adındaki değişkene istek(request) atılıyor.
    fetch(url)
      .then((response) => response.json())
      .then((fotograflar) => {
        // Datayı sadece 'img_src' ile tekradan map ile yazıyoruz.
        fotograflar = fotograflar.photos.map((data) => data.img_src);

        // Sayfaya fotoğrafları ekleyecek function'a params olarak fotoğrafları gönderiyoruz.
        sayfayaFotograflariEkle(fotograflar);
      });
  };

  // Ekrana fotoğrafları ekle.
  const sayfayaFotograflariEkle = (fotograflar) => {
    // Dom içerisinde class ismi 'fotograflar' olan tagi getir.
    const fotograflarDocument = document.querySelector(".fotograflar");

    // 'fotograflar' döngüsü
    for (const fotograf of fotograflar) {
      // FotograflarDocument objesinin içerisine her döngüde üzerine ekler.
      fotograflarDocument.innerHTML += `
        <img
        src="${fotograf}"
        alt="Mars Fotoğrafı"
      />
        `;
    }
  };

  //Nasa api'sine istek atan function çalıştırıldı.
  marsFotograflariniGetir();
};

// Dom yüklendiği zaman tetiklenecek 'sayfaYuklendiginde'
document.addEventListener("DOMContentLoaded", sayfaYuklendiginde);

/**
     * 1-yöntem
     * for (let i = 0; i < fotograflar.length; i++) {
      const fotograf = fotograflar[i];
      console.log(fotograf);
    }
     */
/**
 * 1- document => nosql
 * 2- ilişkisel
 * .
 * .
 * .
 * 6-
 */

/**
 *
 * @FULL_STACK
 * 1- web front
 * 2- back
 * 3-mobile
 * 4-devops
 * 5-seo
 * 6-DB
 * .
 * 10-
 *
 *
 * MEAN STACK(full-stack) ;
 * m=> mongodb
 * e=> express.js (backend)
 * a=> angular (frontend)
 * n=> node.js
 */

const express = require("express");
const uygulama = express();

// next => next eğer route içerisinde yazdığını birden fazla
// callback function var ise o functionlar arası devam etmenizi sağlar

// request(geliş) =>

// response(dönüş) =>
uygulama.get("/merhabadunya", (request, response, next) => {
  //response.send("Selam merhaba dünya route isteği atıldı.");
  response.json({
    isim: "Ahmet",
    soyisim: "İkrim",
  });
});

//localhost, port
//localhost:3000
uygulama.listen(3000, () => {
  console.log("Server 3000 portunda ayağa kalktı.");
});

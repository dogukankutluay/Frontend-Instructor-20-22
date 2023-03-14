const sitilObjesi = {
  color: "red",
  background: "blue",
};

//"color:red; background:blue;"
// yukarıdaki çıktıyı almak istiyoruz.

//node_modules => indirilen paketlerin kodlarını barındırır.
//package-lock.json => indirilen paketlerin versiyonları ve dosya konumlarını bulundurur.

const objectiSitileCevir = require("object-to-style");
const stringSitil = objectiSitileCevir(sitilObjesi);

console.log(stringSitil);

import { useState } from "react";
import "./App.css";
const App = () => {
  const [numaralar, numaralariDegistir] = useState([1, 2, 3, 4]);

  const cogalt = () => {
    // [1,2,3,4]  => 1,2,3,4 => [1,2,3,4,5]
    const yeniNumarlar = [...numaralar, numaralar.length + 1];
    numaralariDegistir(yeniNumarlar);
  };
  const azalt = () => {
    // spread operatörü kullanılırsa o değişkeni klonlamış oluruz ve
    // ram tarafındaki karşılığını değiştirmiş oluruz

    // [1,2,3,4] => 1,2,3,4 => [1,2,3,4]
    const yeniNumarlar = [...numaralar];
    yeniNumarlar.pop();
    //[1,2,3,4] => [1,2,3]
    numaralariDegistir(yeniNumarlar);
  };

  return (
    <div className="alan">
      <button onClick={cogalt}>Çoğalt</button>
      {numaralar.map((numara) => (
        <h1>{numara}</h1>
      ))}
      <button onClick={azalt}>Azalt</button>
    </div>
  );
};

export default App;

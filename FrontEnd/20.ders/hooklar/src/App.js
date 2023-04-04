import { useState } from "react";
import "./App.css";
const App = () => {
  const [numaralar, numaralariDegistir] = useState([1, 2, 3, 4]);

  const cogalt = () => {
    const yeniNumarlar = [...numaralar, numaralar.length + 1];
    numaralariDegistir(yeniNumarlar);
  };
  const azalt = () => {
    const yeniNumarlar = [...numaralar];
    yeniNumarlar.pop();
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

/**
 * @USE_REF
 * import { useRef } from "react";

function App() {
  const inputElemani = useRef(null);

  const fokuslan = () => {
    inputElemani.current.focus();
    inputElemani.current.value = "Selam";
  };
  return (
    <div>
      <input ref={inputElemani} type="text" />
      <button onClick={fokuslan}>Yukarıdaki input'a focus yap.</button>
    </div>
  );
}

export default App;
 */

/**
 * @USE_EFFECT
 * import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Selam";
  });
  return <div>Hello</div>;
}

export default App;

 */

/**
 * @USE_STATE
 * import { useState } from "react";

function App() {
  const [yazi, yaziDegistir] = useState("Merhaba");

  return (
    <div className="App">
      {yazi}
      <button
        onClick={() => {
          yaziDegistir("Selam");
        }}
      >
        Selam Yap
      </button>
    </div>
  );
}

export default App;
 */

import React, { useState } from 'react';
import './App.css';

export function App() {
  const [showAbout, setShowAbout] = useState(false); // State to toggle pages

  const handleButtonClick = () => {
    setShowAbout(!showAbout); // Toggle between Home and About
  };

  return (
    <div className="Centradou">
      {showAbout ? <About /> : <Home />}
      <button onClick={handleButtonClick}>
        {showAbout ? 'Volver pa que o que' : 'Apreta aqui pofa'}
      </button>
    </div>
  );
}

function Home() {
  return (
    <header>
      <span>La verdad no se bien el hecho de que talvez es básico por que lo debiste ver por alguna red social</span><br />
      <span>solo quisiera que pues se vea bonito</span>
    </header>
  );
}

function About() {
  return (
    <div className="message">
      <header>
        <h1>TE AMO</h1>
      </header>

      <main>
        <div>
          <img src="/images/cupon.jpg" alt="Imagen 1" />
        </div>
        <div>
          <img src="/images/img6.jpeg" alt="Imagen 2" />
        </div>
        <div>
          <img src="/images/img8.jpeg" alt="Imagen 3" />
        </div>
      </main>

      <main>
        <p>
          Sheccid, si quieres ser mi San Valentín,<br />
          déjame ser el verso que acaricia tu piel,<br />
          el susurro que te hace sonreír,<br />
          y el amor que nunca dejará de brillar.
        </p>
      </main>

      <footer>
        <div>
          <img src="/images/img2.jpg" alt="Imagen 4" />
          <p>Eres mi luz</p>
        </div>
        <div>
          <img src="/images/img1.jpg" alt="Imagen 5" />
          <p>Mi razón</p>
        </div>
        <div>
          <img src="/images/img3.jpg" alt="Imagen 6" />
          <p>Mi todo</p>
        </div>
        <div>
          <img src="/images/img5.jpeg" alt="Imagen 7" />
          <p>Nunca olvidaré este</p>
          <p>momento, ese apoyo. TE AMO</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
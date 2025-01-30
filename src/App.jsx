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
        {showAbout ? 'volver pa que o que' : 'Apreta aqui pofa'}
      </button>
    </div>
  );
}

function Home() {
  return (
    <header>
      <span>La verdad no se bien el hecho de que talvez es basico por que lo debiste ver por alguna red social</span><br/>
      <span>solo quisiera que pues se vea bonito</span>
    </header>
  );
}

function About() {
  return (
    <div className="message">
      {/* Header */}
      <header>
        <h1>TE AMO</h1>
      </header>

      {/* Main */}
      <main>
        <div>
          <img src="src/assets/cupon.jpg" alt="Imagen 1" />
        </div>
        <div>
          <img src="src/assets/img6.jpeg" alt="Imagen 2" />
        </div>
        <div>
          <img src="src/assets/img8.jpeg" alt="Imagen 3" />
        </div>
      </main>

      {/* Frase poética */}
      <main>
        <p>
          Sheccid, si quieres ser mi San Valentín,<br />
          déjame ser el verso que acaricia tu piel,<br />
          el susurro que te hace sonreír,<br />
          y el amor que nunca dejará de brillar.
        </p>
      </main>

      {/* Footer */}
      <footer>
        <div>
          <img src="src/assets/img2.jpg" alt="Imagen 4" />
          <p>Eres mi luz</p>
        </div>
        <div>
          <img src="src/assets/img1.jpg" alt="Imagen 5" />
          <p>Mi razón</p>
        </div>
        <div>
          <img src="src/assets/img3.jpg" alt="Imagen 6" />
          <p>Mi todo</p>
        </div>
        <div>
          <img src="src/assets/img5.jpeg" alt="Imagen 7" />
          <p>Nunca olvidare este </p>
          <p>momento ese apoyo TE AMO</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
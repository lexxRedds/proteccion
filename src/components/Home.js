import React, { useState, useEffect } from 'react';
import Graph from "./Graph";

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [fibo, setFibo] = useState([]);

  function updateTime() {
    setInterval(() => setCurrentTime(new Date()), 1000);
  }


  function handleClick() {
    const time = currentTime.toLocaleTimeString();
    const [hours, minutes, seconds] = time.split(':');

    const valuesHeader = document.querySelector("h4");
    valuesHeader.textContent = `Valores generados para la serie de Fibonacci a partir del minuto ${minutes}`;


    const minute1 = Math.floor(minutes / 10);
    const minute2 = minutes % 10;

    let fibo = [minute1, minute2];

    if (minute1 > minute2) {
      fibo = [minute2, minute1];
    }

    for (let i = 2; i < seconds; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    setFibo(fibo.reverse());
  }

  useEffect(() => {
    updateTime();
  }, []);

  return (
    <>
      <header>
        <h1>Protección</h1>
        <h2>Pensiones, Cesantías, Ahorro e Inversión</h2>
      </header>
      <main>
        <section className='current-time'>
          <h3>Hora Actual</h3>
          <h2>{currentTime.toLocaleTimeString()}</h2>
          <button onClick={handleClick}>Generar Serie</button>
        </section>
        <section className='series-name'>
          <h1>Serie de Fibonacci</h1>
        </section>
        <section className='series-values'>
          <h4>Series values</h4>
          <p>
            {fibo.map((value, index) => (
              <span key={index}>{value} </span>
            ))}
          </p>
        </section>
        <section className='series-graph'><Graph data={fibo} /></section>
      </main>
      <footer>
        <h6 className="footer-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Líneas de Servicio
        </h6>
        <div className="footer-section">
          <p className="caption">
            Bogotá
          </p>
          <p className="bold">744&nbsp;44&nbsp;64</p>
        </div>
        <div className="footer-section">
          <p className="caption">
            Medellín y Cali
          </p>
          <p className="bold">510&nbsp;90&nbsp;99</p>
        </div>
        <div className="footer-section">
          <p className="caption">
            Barranquilla
          </p>
          <p className="bold">219&nbsp;79&nbsp;99</p>
        </div>
        <div className="footer-section">
          <p className="caption">
            Cartagena
          </p>
          <p className="bold">642&nbsp;79&nbsp;99</p>
        </div>
        <div className="footer-section">
          <p className="caption">
            Resto del país
          </p>
          <p className="bold">01&nbsp;8000&nbsp;52&nbsp;8000</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
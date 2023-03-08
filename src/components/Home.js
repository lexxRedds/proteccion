import React, { useState, useEffect } from 'react';
import Graph from "./Graph";

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeArray, setTimeArray] = useState([]);
  const [fibo, setFibo] = useState([]);

  function updateTime() {
    setInterval(() => setCurrentTime(new Date()), 1000);
  }

  function handleClick() {
    const time = currentTime.toLocaleTimeString();
    const [hours, minutes, seconds] = time.split(':');

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


    /* const sum = parseInt(minutes, 10) + parseInt(seconds, 10);
     setTimeArray([...timeArray, sum]);*/

  }

  useEffect(() => {
    updateTime();
  }, []);

  return (
    <>
      <header>Protección: Pensiones, Cesantías, Ahorro e Inversión</header>
      <main>
        <h1>Hora Actual</h1>
        <h2>{currentTime.toLocaleTimeString()}</h2>
        <button onClick={handleClick}>Generar Serie</button>
        <div>
          <h1>Serie de Fibonacci</h1>
          <div>
            {fibo.map((value, index) => (
              <span key={index}>{value} </span>
            ))}
          </div>
          <div><Graph data={fibo} /></div>
        </div>
      </main>
    </>
  );
}

export default Home;
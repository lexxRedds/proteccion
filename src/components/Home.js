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

    for (let i = 2; i < seconds; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    setFibo(fibo.reverse());

        
    const sum = parseInt(minutes, 10) + parseInt(seconds, 10);
    setTimeArray([...timeArray, sum]);

  }

  useEffect(() => {
    updateTime();
  }, []);

  return (
    <div>
      <h1>Hora Actual</h1>
      <div>{currentTime.toLocaleTimeString()}</div>
      <button onClick={handleClick}>Generar Serie</button>
      <div>
        <h1>Serie de Fibonacci</h1>
        <div>
          {fibo.map((value, index) => (
            <span key={index}>{value} </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
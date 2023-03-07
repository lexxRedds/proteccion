import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeArray, setTimeArray] = useState([]);

  function updateTime() {
    setInterval(() => setCurrentTime(new Date()), 1000);
  }

  function generateFibonacci() {
    setTimeArray([...timeArray, currentTime.toLocaleTimeString()]);
  }

  useEffect(() => {
    updateTime();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Current Time:</h1>
        <h2>{currentTime.toLocaleTimeString()}</h2>
        <button onClick={generateFibonacci}>Generar Serie</button>
        
      </header>
    </div>
  );
}

export default App;

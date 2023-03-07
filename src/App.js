import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

import Home from './components/Home';

function App() {

  const test = [1, 3, 5, 2, 8];
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

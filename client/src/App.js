import './App.css';
import React from 'react';
import HomePage from './screen/HomePage'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <HomePage/>

    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import NitrateCancer from './components/NitrateCancer/NitrateCancer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nitrate-cancer" element={<NitrateCancer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
